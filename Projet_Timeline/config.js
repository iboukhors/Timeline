var items = new vis.DataSet([]);
var groups = [
    {
        id: 1,
        content: 'Décision'
    },
    {
        id: 2,
        content: 'Infraction'
    },
    {
        id: 3,
        content: 'Stage'
    },
]

var container = document.getElementById('visualization');
var options = {
    editable: {
        add: true,
        remove: true,
        updateGroup: true,
        updateTime: true,
        overrideItems: true,
    }  // default for all items
};
// create visualization
var container = document.getElementById('visualization');
var options = {
    height: '300px',
    min: new Date(2012, 1, 1), // lower limit of visible range
    max: new Date(2099, 1, 1), // upper limit of visible range
    zoomMin: 1000 * 60 * 60 * 24, // one day in milliseconds
    zoomMax: 1000 * 60 * 60 * 24 * 31 * 12, // about three months in milliseconds
};
var timeline = new vis.Timeline(container, items, groups, options);

var updateEditOptions = function (e) {
    var changedOption = e.target.name;
    var options = {editable: {}};
    options.editable[changedOption] = e.target.checked;
    timeline.setOptions(options);
};

var cbs = document.getElementsByTagName("input");
[].forEach.call(cbs, function (cb) {
    cb.onchange = updateEditOptions;
});

