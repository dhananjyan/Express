FilePond.registerPlugin(
    FilePondPluginImageResize,
    FilePondPluginImagePreview,
    FilePondPluginFileEncode,

);

FilePond.setOptions({
    stylePanelAspectRatio: 150 / 100
})

FilePond.parse(document.body);