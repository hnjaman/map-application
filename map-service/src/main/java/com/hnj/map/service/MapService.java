package com.hnj.map.service;

import com.hnj.map.model.Geolocation;

import java.util.List;

public interface MapService {
    List<Geolocation> getGeolocations();
}
