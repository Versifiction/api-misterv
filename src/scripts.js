var app = {
    init: function() {
        $('#button').on('click', app.toggleButton);
    },
    toggleButton: function() {
        $('#button').textContent('Clique pour les réduire');
    }
};

$(app.init);