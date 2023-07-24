//package kits.final_project_api.Service.UserDetailsService;
//
//
//import kits.final_project_api.Entity.Account;
//import kits.final_project_api.Model.UserDetailAuthentication.CustomAddressWalletDetails;
//import kits.final_project_api.Repository.AccountRepository;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//
//public class CustomAddressWalletDetailsService implements UserDetailsService {
//
//    private AccountRepository accountRepository;
//
//
//    @Override
//    public UserDetails loadUserByUsername(String addressWallet) throws UsernameNotFoundException {
//        Account account = accountRepository.findByAddressWallet(addressWallet);
//        if (account == null){
//            throw new UsernameNotFoundException("Could not find user with that address wallet");
//        }
//        return new CustomAddressWalletDetails(account);
//    }
//}
