//package kits.final_project_api.Service.impl.ArtistPage;
//
//import kits.final_project_api.Repository.ArtistPage.ArtistRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDateTime;
//import java.time.format.DateTimeFormatter;
//import java.util.List;
//import java.util.Map;
//
//@Service
//public class ArtistServiceImpl {
//    @Autowired
//    private ArtistRepository artistRepository;
//
//    public List<Map<String, Object>> getDetailArtist(Integer id){
//        LocalDateTime date_current = LocalDateTime.now().minusDays(1);
//        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
//        String date_current_format = date_current.format(myFormatObj);
//        List<Map<String, Object>> Artist = artistRepository.getDetailArtist(date_current_format, id);
//
//        return Artist;
//    }
//}
