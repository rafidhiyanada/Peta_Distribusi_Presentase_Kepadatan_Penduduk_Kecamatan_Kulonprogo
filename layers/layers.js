var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DistribusiPresentasedanKepadatanPendudukKecamatanKulonprogo_1 = new ol.format.GeoJSON();
var features_DistribusiPresentasedanKepadatanPendudukKecamatanKulonprogo_1 = format_DistribusiPresentasedanKepadatanPendudukKecamatanKulonprogo_1.readFeatures(json_DistribusiPresentasedanKepadatanPendudukKecamatanKulonprogo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistribusiPresentasedanKepadatanPendudukKecamatanKulonprogo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistribusiPresentasedanKepadatanPendudukKecamatanKulonprogo_1.addFeatures(features_DistribusiPresentasedanKepadatanPendudukKecamatanKulonprogo_1);
var lyr_DistribusiPresentasedanKepadatanPendudukKecamatanKulonprogo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistribusiPresentasedanKepadatanPendudukKecamatanKulonprogo_1, 
                style: style_DistribusiPresentasedanKepadatanPendudukKecamatanKulonprogo_1,
                popuplayertitle: 'Distribusi, Presentase, dan Kepadatan Penduduk Kecamatan Kulonprogo',
                interactive: true,
    title: 'Distribusi, Presentase, dan Kepadatan Penduduk Kecamatan Kulonprogo<br />\
    <img src="styles/legend/DistribusiPresentasedanKepadatanPendudukKecamatanKulonprogo_1_0.png" /> Rendah<br />\
    <img src="styles/legend/DistribusiPresentasedanKepadatanPendudukKecamatanKulonprogo_1_1.png" /> Cukup Rendah<br />\
    <img src="styles/legend/DistribusiPresentasedanKepadatanPendudukKecamatanKulonprogo_1_2.png" /> Sedang<br />\
    <img src="styles/legend/DistribusiPresentasedanKepadatanPendudukKecamatanKulonprogo_1_3.png" /> Cukup Tinggi<br />\
    <img src="styles/legend/DistribusiPresentasedanKepadatanPendudukKecamatanKulonprogo_1_4.png" /> Tinggi<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_DistribusiPresentasedanKepadatanPendudukKecamatanKulonprogo_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DistribusiPresentasedanKepadatanPendudukKecamatanKulonprogo_1];
lyr_DistribusiPresentasedanKepadatanPendudukKecamatanKulonprogo_1.set('fieldAliases', {'WADMKC': 'Nama Desa', 'Join_Luas Wilayah (Km2)': 'Join_Luas Wilayah (Km2)', 'Join_Kepadatan Penduduk (Jiwa/Km2)': 'Join_Kepadatan Penduduk (Jiwa/Km2)', 'Join_Distribusi Persentase Penduduk': 'Join_Distribusi Persentase Penduduk', });
lyr_DistribusiPresentasedanKepadatanPendudukKecamatanKulonprogo_1.set('fieldImages', {'WADMKC': 'TextEdit', 'Join_Luas Wilayah (Km2)': 'TextEdit', 'Join_Kepadatan Penduduk (Jiwa/Km2)': 'Range', 'Join_Distribusi Persentase Penduduk': 'TextEdit', });
lyr_DistribusiPresentasedanKepadatanPendudukKecamatanKulonprogo_1.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'Join_Luas Wilayah (Km2)': 'inline label - always visible', 'Join_Kepadatan Penduduk (Jiwa/Km2)': 'inline label - always visible', 'Join_Distribusi Persentase Penduduk': 'inline label - always visible', });
lyr_DistribusiPresentasedanKepadatanPendudukKecamatanKulonprogo_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});