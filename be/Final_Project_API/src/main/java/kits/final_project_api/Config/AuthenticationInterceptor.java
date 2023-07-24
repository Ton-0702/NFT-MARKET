package kits.final_project_api.Config;

//@Configuration
//public class AuthenticationInterceptor implements WebMvcConfigurer {
//    @Autowired
//    private AdminAuthenticationInterceptor adminAuthenticationInterceptor;
//
//    @Override
//    public void addInterceptors(InterceptorRegistry registry){
//        registry.addInterceptor(adminAuthenticationInterceptor).addPathPatterns("/api/admin/**");
//    }
//
//}

import kits.final_project_api.Interceptor.AdminAuthenticationInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
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
//    @Bean
//    public SecurityFilterChain filterChain (HttpSecurity http) throws Exception{
//        http.httpBasic(Customizer.withDefaults())
//                .authorizeHttpRequests((auth) ->{
//                    auth.requestMatchers("/api/register/**").permitAll();
//                });
//        return http.build();
//    }

//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//
//        registry
//                // Enable cross-origin request handling for the specified path pattern.
//                // Exact path mapping URIs (such as "/admin") are supported as well as Ant-style path patterns (such as "/admin/**").
//                .addMapping("/*")
//                .allowedOrigins("*")
//                // .allowedOriginPatterns("")
//                .allowCredentials(false)
//                .allowedHeaders("*")
//                .exposedHeaders("*")
////                .maxAge(60 *30)
//                .allowedMethods("*")
//        ;
//    }
}


