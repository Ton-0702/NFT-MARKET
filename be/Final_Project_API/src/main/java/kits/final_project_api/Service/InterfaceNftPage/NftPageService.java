package kits.final_project_api.Service.InterfaceNftPage;

import java.util.List;
import java.util.Map;

public interface NftPageService {

    String getDateStart_EndBid(Integer id);

    //   String getDateEndBid(Integer id);
    List<Map<String, Object>> getNftAndUser_Info(Integer id);
   List<Map<String, Object>> getClassifyAndCategory_Info(Integer id);

    List<Map<String, Object>> getNftInfoDetailPage(Integer id);
}
