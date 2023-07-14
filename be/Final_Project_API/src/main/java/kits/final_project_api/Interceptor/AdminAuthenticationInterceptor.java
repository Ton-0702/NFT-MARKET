package kits.final_project_api.Interceptor;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import kits.final_project_api.Service.impl.AccountServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class AdminAuthenticationInterceptor implements HandlerInterceptor {
    @Autowired
    HttpSession session;

    @Autowired AccountServiceImpl accountServiceImpl;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        System.out.println("PRE HANDLER .............");
        System.out.println("HEADER: "+ request.getHeader("Cookie"));
        String rawCookie = request.getHeader("Cookie");
        return false;
    }
}
