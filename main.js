
// Define a view
var view = new ol.View({
    projection:'EPSG:4326',
    center : [78.42715085003131, 17.392982221571874], //Coordinates of center
    zoom : 10 //zoom level of map
})

//Define basemap
var OSMBaseMap = new ol.layer.Tile({
    source: new ol.source.OSM({
        wrapX: false
      })
  })


// Define array of layers
var layerArray = [OSMBaseMap]

// Define our map
var map = new ol.Map({
    target:'map',
    layers:layerArray,
    view : view
})

// // Define Input JSON
// var inputJSON = {
//     "type": "FeatureCollection",
//     "features": [
//       {
//         "type": "Feature",
//         "properties": {},
//         "geometry": {
//           "coordinates": [
//             [
//               [
//                 78.23213685793132,
//                 17.532192402761822
//               ],
//               [
//                 78.23213685793132,
//                 17.23045494559031
//               ],
//               [
//                 78.70795452945839,
//                 17.23045494559031
//               ],
//               [
//                 78.70795452945839,
//                 17.532192402761822
//               ],
//               [
//                 78.23213685793132,
//                 17.532192402761822
//               ]
//             ]
//           ],
//           "type": "Polygon"
//         }
//       }
//     ]
//   }

//   // Define a vector source
//   var vectorSource = new ol.source.Vector({
//     features: (new ol.format.GeoJSON().readFeatures(inputJSON))
// })

//   //Vector Layer
//   var vectorLayer = new ol.layer.Vector({
//     source: vectorSource
// })

//   // adding vector layer to map
// map.addLayer(vectorLayer)

// // ext geosjon
// var extSource = new ol.source.Vector({
//     format: new ol.format.GeoJSON(),
//     url : 'hyd_bound.geojson'
//  })

// var extLayer = new ol.layer.Vector({
//     source: extSource
// })

// //add ext layer
// map.addLayer(extLayer)

// drag Box
var dragBox = new ol.interaction.DragBox({})

dragBox.on('boxstart', function(evt){
    console.log('Box start')
})

//zoom to extent
dragBox.on('boxend', function(evt){
    console.log('Box End')
    map.getView().fit(dragBox.getGeometry().getExtent() , map.getSize());
})
map.addInteraction(dragBox)