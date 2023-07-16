package kits.final_project_api.Controller;

import kits.final_project_api.Entity.Collection;
import kits.final_project_api.Service.impl.CollectionServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("collection")
public class CollectionController {
    @Autowired
    private CollectionServiceImpl collectionServiceImpl;

    @GetMapping
    @ResponseBody
    public List<Map<String, Object>> getAllCollection(Model model) {
        List<Map<String, Object>> colections= collectionServiceImpl.GetAllCollection();
        model.addAttribute("collections", colections);
        return colections;
    }
}
