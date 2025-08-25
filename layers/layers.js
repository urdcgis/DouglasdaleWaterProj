ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32735").setExtent([673328.268917, 7759584.640683, 674944.705144, 7760958.040585]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_High_pointscoordq_2 = new ol.format.GeoJSON();
var features_High_pointscoordq_2 = format_High_pointscoordq_2.readFeatures(json_High_pointscoordq_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32735'});
var jsonSource_High_pointscoordq_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_High_pointscoordq_2.addFeatures(features_High_pointscoordq_2);
var lyr_High_pointscoordq_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_High_pointscoordq_2, 
                style: style_High_pointscoordq_2,
                popuplayertitle: 'High_points — coordq',
                interactive: true,
                title: '<img src="styles/legend/High_pointscoordq_2.png" /> High_points — coordq'
            });
var format_Water_coursecoordq_3 = new ol.format.GeoJSON();
var features_Water_coursecoordq_3 = format_Water_coursecoordq_3.readFeatures(json_Water_coursecoordq_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32735'});
var jsonSource_Water_coursecoordq_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_coursecoordq_3.addFeatures(features_Water_coursecoordq_3);
var lyr_Water_coursecoordq_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Water_coursecoordq_3, 
                style: style_Water_coursecoordq_3,
                popuplayertitle: 'Water_course — coordq',
                interactive: true,
                title: '<img src="styles/legend/Water_coursecoordq_3.png" /> Water_course — coordq'
            });
var format_Roads_combined_4 = new ol.format.GeoJSON();
var features_Roads_combined_4 = format_Roads_combined_4.readFeatures(json_Roads_combined_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32735'});
var jsonSource_Roads_combined_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_combined_4.addFeatures(features_Roads_combined_4);
var lyr_Roads_combined_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_combined_4, 
                style: style_Roads_combined_4,
                popuplayertitle: 'Roads_combined',
                interactive: true,
                title: '<img src="styles/legend/Roads_combined_4.png" /> Roads_combined'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_High_pointscoordq_2.setVisible(true);lyr_Water_coursecoordq_3.setVisible(true);lyr_Roads_combined_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatelliteHybrid_1,lyr_High_pointscoordq_2,lyr_Water_coursecoordq_3,lyr_Roads_combined_4];
lyr_High_pointscoordq_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'x': 'x', 'y': 'y', 'z': 'z', });
lyr_Water_coursecoordq_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'x': 'x', 'y': 'y', 'z': 'z', });
lyr_Roads_combined_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '044599008E38E568BD3D': '044599008E38E568BD3D', '094F20CA3138E1C8AFD3': '094F20CA3138E1C8AFD3', '04FA28D40B38E1C87A58': '04FA28D40B38E1C87A58', '0D8CE72BF538E1C6A6A7': '0D8CE72BF538E1C6A6A7', '0F2ABDDF7738E1C1DF24': '0F2ABDDF7738E1C1DF24', '051901A37938DC66E365': '051901A37938DC66E365', 'ref': 'ref', 'type': 'type', 'length_m': 'length_m', 'Province': 'Province', 'District': 'District', 'highway': 'highway', 'layer': 'layer', 'path': 'path', 'length': 'length', });
lyr_High_pointscoordq_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'x': 'Range', 'y': 'Range', 'z': 'Range', });
lyr_Water_coursecoordq_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'x': 'Range', 'y': 'Range', 'z': 'Range', });
lyr_Roads_combined_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', '044599008E38E568BD3D': 'Range', '094F20CA3138E1C8AFD3': 'Range', '04FA28D40B38E1C87A58': 'Range', '0D8CE72BF538E1C6A6A7': 'Range', '0F2ABDDF7738E1C1DF24': 'Range', '051901A37938DC66E365': 'Range', 'ref': 'TextEdit', 'type': 'TextEdit', 'length_m': 'TextEdit', 'Province': 'TextEdit', 'District': 'TextEdit', 'highway': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'length': 'Range', });
lyr_High_pointscoordq_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'x': 'no label', 'y': 'no label', 'z': 'no label', });
lyr_Water_coursecoordq_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'x': 'no label', 'y': 'no label', 'z': 'no label', });
lyr_Roads_combined_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', '044599008E38E568BD3D': 'no label', '094F20CA3138E1C8AFD3': 'no label', '04FA28D40B38E1C87A58': 'no label', '0D8CE72BF538E1C6A6A7': 'no label', '0F2ABDDF7738E1C1DF24': 'no label', '051901A37938DC66E365': 'no label', 'ref': 'no label', 'type': 'no label', 'length_m': 'no label', 'Province': 'no label', 'District': 'no label', 'highway': 'no label', 'layer': 'no label', 'path': 'no label', 'length': 'no label', });
lyr_Roads_combined_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});