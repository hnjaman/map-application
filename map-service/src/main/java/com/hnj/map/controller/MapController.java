package com.hnj.map.controller;

import com.hnj.map.model.Geolocation;
import com.hnj.map.service.MapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MapController {
    private MapService mapService;

    @Autowired
    public MapController(MapService mapService) {
        this.mapService = mapService;
    }

    @GetMapping("/maps")
	public List<Geolocation> getMaps(){
        return mapService.getGeolocations();
    }
}
