AFRAME.registerComponent('model', {
    schema: {
      src: {type: 'string'}
    },
    init: function () {
      var el = this.el;
      var data = this.data;
      var model = document.createElement('a-entity');
      model.setAttribute('gltf-model', data.src);
      el.appendChild(model);
    }
  });
  
  document.querySelector('a-scene').addEventListener('loaded', function () {
    var marker = document.querySelector('a-marker');
    var model = document.createElement('a-entity');
    model.setAttribute('model', {src: 'model.gltf'});
    marker.appendChild(model);
  });
  