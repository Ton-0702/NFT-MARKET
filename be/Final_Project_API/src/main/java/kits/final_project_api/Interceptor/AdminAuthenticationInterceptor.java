package kits.final_project_api.Interceptor;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import kits.final_project_api.Entity.Account;
import kits.final_project_api.Model.Response.RegisterResponseDto;
import kits.final_project_api.Service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import java.util.HashMap;
import java.util.Map;

@Component
public class AdminAuthenticationInterceptor implements HandlerInterceptor {
    @Autowired
    HttpSession session;

    @Autowired
    AccountService accountService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        System.out.println("PRE HANDLER.........");
        System.out.println("HEADER: " + request.getHeader("Cookie"));
        String rawCookie = request.getHeader("Cookie");
        if(rawCookie != null) {
            String[] rawCookieParams = rawCookie.split(";");
            Map<String, String> hd = new HashMap<>();
            for(String rawCookieNameAndValue :rawCookieParams)
            {
                String[] rawCookieNameAndValuePair = rawCookieNameAndValue.split("=");
                hd.put(rawCookieNameAndValuePair[0], rawCookieNameAndValuePair[1]);
            }
            System.out.println("TOKEN: " + hd.get("token"));
            Account user = accountService.findByToken(hd.get("token"));
            System.out.println("USERRR: " + user);
            if(user != null) {
                return true;
            } else {
                response.setContentType("application/json");
                RegisterResponseDto res = new RegisterResponseDto("User not found", "",
                        "", "USER_NOT_FOUND");
                String json = new ObjectMapper().writeValueAsString(res);
                response.setStatus(HttpStatus.UNAUTHORIZED.value());
                response.getWriter().print(json);
                response.flushBuffer();
                return false;
            }
        } else {
            response.setContentType("application/json");
            RegisterResponseDto res = new RegisterResponseDto("User not found", "",
                    "", "USER_NOT_FOUND");
            String json = new ObjectMapper().writeValueAsString(res);
            response.setStatus(HttpStatus.UNAUTHORIZED.value());
            response.getWriter().print(json);
            response.flushBuffer();
            return false;
        }
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response,
                                Object handler, Exception exception) throws Exception {



    }
}
