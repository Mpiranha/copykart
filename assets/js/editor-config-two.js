(function () {

    class CounterTwo {
        constructor(quill, options) {
            this.quill = quill;
            this.options = options;
            this.container = document.querySelector(options.container);
            quill.on('text-change', this.update.bind(this));
            this.update(); // Account for initial contents
        }

        calculate() {
            let text = this.quill.getText();
            if (this.options.unit === 'word') {
                text = text.trim();
                // Splitting empty text returns a non-empty array
                return text.length > 0 ? text.split(/\s+/).length : 0;
            } else {
                return text.length;
            }
        }

        update() {
            var length = this.calculate();
            var label = this.options.unit;
            if (length !== 1) {
                label += 's';
            }
            this.container.innerText = length + ' ' + label;
        }
    }


    // Implement and register module
    //QuillTwo.register('modules/counter', CounterTwo);

    var toolbarOptions = [
        [{
            'font': []
        }],
        [{
            'align': []
        }],
        ['bold', 'italic', 'underline'], // toggled buttons
        // ['blockquote', 'code-block'],

        // [{
        //     'header': 1
        // }, {
        //     'header': 2
        // }], // custom button values
        [{
            'list': 'ordered'
        }, {
            'list': 'bullet'
        }],
        // [{
        //     'script': 'sub'
        // }, {
        //     'script': 'super'
        // }], // superscript/subscript
        // [{
        //     'indent': '-1'
        // }, {
        //     'indent': '+1'
        // }], // outdent/indent
        // [{
        //     'direction': 'rtl'
        // }], // text direction

        // [{
        //     'size': ['small', false, 'large', 'huge']
        // }], // custom dropdown
        // [{
        //     'header': [1, 2, 3, 4, 5, 6, false]
        // }],

        [{
                'color': []
            }
            // ,
            //  {
            //     'background': []
            // }
        ], // dropdown with defaults from theme
        ['clean'] // remove formatting button
    ];

    var quillTwo = new Quill('#top-content-two', {
        modules: {
            toolbar: toolbarOptions
            // ,
            // counter: {
            //     container: '#counter',
            //     unit: 'word'
            // }
        },
        theme: 'snow'
    });

    quillTwo.on('selection-change', function (range, oldRange, source) {
        if (range === null && oldRange !== null) {
            //addToLog($(this));
            //console.log($(this));
            $('.ql-toolbar.ql-snow').css('display', 'none');
        } else if (range !== null && oldRange === null)
            //addToLog('focus');
            $('.ql-toolbar.ql-snow').css('display', 'block');
    });

})();