package com.hnj.map.service.impl;

import com.hnj.map.model.Geolocation;
import com.hnj.map.repository.MapRepository;
import com.hnj.map.service.MapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MapServiceImpl implements MapService {

	private final MapRepository mapRepository;

	@Autowired
	public MapServiceImpl(MapRepository mapRepository) {
		this.mapRepository = mapRepository;
	}

	@Override
	public List<Geolocation> getGeolocations() {
		return mapRepository.findAll();
	}
}
