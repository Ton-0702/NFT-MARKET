package kits.final_project_api.Config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.CommonsRequestLoggingFilter;

@Configuration
public class RequestLoggingFilterConfig {

   @Bean
   public CommonsRequestLoggingFilter logFilter() {
       CommonsRequestLoggingFilter filter
               = new CommonsRequestLoggingFilter();
       filter.setIncludeQueryString(true);
       filter.setIncludePayload(true);
       filter.setMaxPayloadLength(10000);
       filter.setIncludeHeaders(false);
       filter.setAfterMessagePrefix("REQUEST DATA : ");
       return filter;
   }
}