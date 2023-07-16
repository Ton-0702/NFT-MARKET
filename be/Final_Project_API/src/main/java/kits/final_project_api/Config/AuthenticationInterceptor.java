package kits.final_project_api.Config;

import kits.final_project_api.Interceptor.AdminAuthenticationInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class AuthenticationInterceptor implements WebMvcConfigurer {
    @Autowired
    private AdminAuthenticationInterceptor adminAuthenticationInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry){
        registry.addInterceptor(adminAuthenticationInterceptor).addPathPatterns("/api/admin/**");
    }
}
