package kits.final_project_api.Service.ArtistPage;

import java.util.List;
import java.util.Map;

public interface ArtistPageService {
    List<Map<String, Object>> getDetailArtist(Integer account_id);
}
