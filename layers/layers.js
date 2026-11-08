var wms_layers = [];

var format_Trelew2026_0 = new ol.format.GeoJSON();
var features_Trelew2026_0 = format_Trelew2026_0.readFeatures(json_Trelew2026_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trelew2026_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trelew2026_0.addFeatures(features_Trelew2026_0);
var lyr_Trelew2026_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trelew2026_0, 
                style: style_Trelew2026_0,
                popuplayertitle: 'Trelew 2026',
                interactive: true,
                title: '<img src="styles/legend/Trelew2026_0.png" /> Trelew 2026'
            });
var format_Clasesdesuelos_1 = new ol.format.GeoJSON();
var features_Clasesdesuelos_1 = format_Clasesdesuelos_1.readFeatures(json_Clasesdesuelos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clasesdesuelos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clasesdesuelos_1.addFeatures(features_Clasesdesuelos_1);
var lyr_Clasesdesuelos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clasesdesuelos_1, 
                style: style_Clasesdesuelos_1,
                popuplayertitle: 'Clases de suelos',
                interactive: true,
    title: 'Clases de suelos<br />\
    <img src="styles/legend/Clasesdesuelos_1_0.png" /> 2<br />\
    <img src="styles/legend/Clasesdesuelos_1_1.png" /> 3<br />\
    <img src="styles/legend/Clasesdesuelos_1_2.png" /> 4<br />\
    <img src="styles/legend/Clasesdesuelos_1_3.png" /> 6<br />' });
var format_Metroscuadradosqueocupanelreaurbanaenlaclasesdesuelos_2 = new ol.format.GeoJSON();
var features_Metroscuadradosqueocupanelreaurbanaenlaclasesdesuelos_2 = format_Metroscuadradosqueocupanelreaurbanaenlaclasesdesuelos_2.readFeatures(json_Metroscuadradosqueocupanelreaurbanaenlaclasesdesuelos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Metroscuadradosqueocupanelreaurbanaenlaclasesdesuelos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Metroscuadradosqueocupanelreaurbanaenlaclasesdesuelos_2.addFeatures(features_Metroscuadradosqueocupanelreaurbanaenlaclasesdesuelos_2);
var lyr_Metroscuadradosqueocupanelreaurbanaenlaclasesdesuelos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Metroscuadradosqueocupanelreaurbanaenlaclasesdesuelos_2, 
                style: style_Metroscuadradosqueocupanelreaurbanaenlaclasesdesuelos_2,
                popuplayertitle: 'Metros cuadrados que ocupan el área urbana en la clases de suelos',
                interactive: true,
    title: 'Metros cuadrados que ocupan el área urbana en la clases de suelos<br />\
    <img src="styles/legend/Metroscuadradosqueocupanelreaurbanaenlaclasesdesuelos_2_0.png" /> 3<br />\
    <img src="styles/legend/Metroscuadradosqueocupanelreaurbanaenlaclasesdesuelos_2_1.png" /> 6<br />' });
var format_Metroscuadradosqueocupanlosloteosenlaclasesdesuelos_3 = new ol.format.GeoJSON();
var features_Metroscuadradosqueocupanlosloteosenlaclasesdesuelos_3 = format_Metroscuadradosqueocupanlosloteosenlaclasesdesuelos_3.readFeatures(json_Metroscuadradosqueocupanlosloteosenlaclasesdesuelos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Metroscuadradosqueocupanlosloteosenlaclasesdesuelos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Metroscuadradosqueocupanlosloteosenlaclasesdesuelos_3.addFeatures(features_Metroscuadradosqueocupanlosloteosenlaclasesdesuelos_3);
var lyr_Metroscuadradosqueocupanlosloteosenlaclasesdesuelos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Metroscuadradosqueocupanlosloteosenlaclasesdesuelos_3, 
                style: style_Metroscuadradosqueocupanlosloteosenlaclasesdesuelos_3,
                popuplayertitle: 'Metros cuadrados que ocupan los loteos en la clases de suelos',
                interactive: true,
    title: 'Metros cuadrados que ocupan los loteos en la clases de suelos<br />\
    <img src="styles/legend/Metroscuadradosqueocupanlosloteosenlaclasesdesuelos_3_0.png" /> 2<br />\
    <img src="styles/legend/Metroscuadradosqueocupanlosloteosenlaclasesdesuelos_3_1.png" /> 3<br />\
    <img src="styles/legend/Metroscuadradosqueocupanlosloteosenlaclasesdesuelos_3_2.png" /> 4<br />\
    <img src="styles/legend/Metroscuadradosqueocupanlosloteosenlaclasesdesuelos_3_3.png" /> 6<br />' });

lyr_Trelew2026_0.setVisible(true);lyr_Clasesdesuelos_1.setVisible(true);lyr_Metroscuadradosqueocupanelreaurbanaenlaclasesdesuelos_2.setVisible(true);lyr_Metroscuadradosqueocupanlosloteosenlaclasesdesuelos_3.setVisible(true);
var layersList = [lyr_Trelew2026_0,lyr_Clasesdesuelos_1,lyr_Metroscuadradosqueocupanelreaurbanaenlaclasesdesuelos_2,lyr_Metroscuadradosqueocupanlosloteosenlaclasesdesuelos_3];
lyr_Trelew2026_0.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'area mts': 'area mts', });
lyr_Clasesdesuelos_1.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SUELO_': 'SUELO_', 'SUELO_ID': 'SUELO_ID', 'UNION': 'UNION', 'SUELO': 'SUELO', 'CLASE': 'CLASE', 'Aptitud': 'Aptitud', });
lyr_Metroscuadradosqueocupanelreaurbanaenlaclasesdesuelos_2.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SUELO_': 'SUELO_', 'SUELO_ID': 'SUELO_ID', 'UNION': 'UNION', 'SUELO': 'SUELO', 'CLASE': 'CLASE', 'mts2': 'm²', });
lyr_Metroscuadradosqueocupanlosloteosenlaclasesdesuelos_3.set('fieldAliases', {'fid': 'Metros cuadrados que ocupan los loteos en la clase de suelos', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SUELO_': 'SUELO_', 'SUELO_ID': 'SUELO_ID', 'UNION': 'UNION', 'SUELO': 'SUELO', 'CLASE': 'Metros cuadrados que ocupan los loteos en la clase de suelos', 'mts2': 'm²', });
lyr_Trelew2026_0.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'area mts': 'Range', });
lyr_Clasesdesuelos_1.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SUELO_': 'TextEdit', 'SUELO_ID': 'TextEdit', 'UNION': 'Range', 'SUELO': 'TextEdit', 'CLASE': 'Range', 'Aptitud': 'TextEdit', });
lyr_Metroscuadradosqueocupanelreaurbanaenlaclasesdesuelos_2.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SUELO_': 'TextEdit', 'SUELO_ID': 'TextEdit', 'UNION': 'Range', 'SUELO': 'TextEdit', 'CLASE': 'Range', 'mts2': 'Range', });
lyr_Metroscuadradosqueocupanlosloteosenlaclasesdesuelos_3.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SUELO_': 'TextEdit', 'SUELO_ID': 'TextEdit', 'UNION': 'Range', 'SUELO': 'TextEdit', 'CLASE': 'Range', 'mts2': 'Range', });
lyr_Trelew2026_0.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'area mts': 'hidden field', });
lyr_Clasesdesuelos_1.set('fieldLabels', {'fid': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'SUELO_': 'hidden field', 'SUELO_ID': 'hidden field', 'UNION': 'hidden field', 'SUELO': 'hidden field', 'CLASE': 'header label - always visible', 'Aptitud': 'header label - always visible', });
lyr_Metroscuadradosqueocupanelreaurbanaenlaclasesdesuelos_2.set('fieldLabels', {'fid': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'SUELO_': 'hidden field', 'SUELO_ID': 'hidden field', 'UNION': 'hidden field', 'SUELO': 'hidden field', 'CLASE': 'inline label - always visible', 'mts2': 'header label - always visible', });
lyr_Metroscuadradosqueocupanlosloteosenlaclasesdesuelos_3.set('fieldLabels', {'fid': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'SUELO_': 'hidden field', 'SUELO_ID': 'hidden field', 'UNION': 'hidden field', 'SUELO': 'hidden field', 'CLASE': 'hidden field', 'mts2': 'header label - always visible', });
lyr_Metroscuadradosqueocupanlosloteosenlaclasesdesuelos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});