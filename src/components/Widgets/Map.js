import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from '!mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
	'pk.eyJ1IjoibGF1cmFhbHlzb24iLCJhIjoiY2tzcDJleWVkMDF0NjMxcGhwMzM1Mm1tMiJ9.27PwqNrg2-gZnMmuS1vOww'

export default function Map() {
	const mapContainer = useRef(null)
	const map = useRef(null)
	const [lng, setLng] = useState(77.566)
	const [lat, setLat] = useState(13.135)
	const [zoom, setZoom] = useState(12.2)

	useEffect(() => {
		if (map.current) return // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/lauraalyson/ckwva7h3y2cyo14pks6bbjn7c',
			center: [lng, lat],
			zoom: zoom,
		})
	})

	useEffect(() => {
		if (!map.current) return // wait for map to initialize
		map.current.on('move', () => {
			setLng(map.current.getCenter().lng.toFixed(4))
			setLat(map.current.getCenter().lat.toFixed(4))
			setZoom(map.current.getZoom().toFixed(2))
		})
	})

	return <div ref={mapContainer} className='map-container' />
}
