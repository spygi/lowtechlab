+function () {
    vowels = ['Α', 'Ε', 'Ι', 'Η', 'Ο', 'Υ', 'Ω'];
    dictionary = {
        'Α': 'A',
        'Ά': 'Á',
        'Β': 'V',
        'Γ': 'Y',
        'Δ': 'TH',
        'Ε': 'E',
        'Έ': 'É',
        'Ζ': 'Z',
        'Η': 'I',
        'Θ': 'TH',
        'Ι': 'I',
        'Ί': 'Í',
        'Κ': 'K',
        'Λ': 'L',
        'Μ': 'M',
        'Ν': 'N',
        'Ξ': 'X',
        'Ο': 'O',
        'Ό': 'Ó',
        'Π': 'P',
        'Ρ': 'R',
        'Σ': 'S',
        'Τ': 'T',
        'Υ': 'Ι', // or I, F
        'Ύ': '',
        'Φ': 'F',
        'Χ': 'CH',
        'Ψ': 'PS',
        'Ω': 'O',
        'Ώ': 'Ó',
        'ΑΙ': 'E',
        'ΟΙ': 'I',
        'ΕΙ': 'I',
        'ΟΪ': 'OI',
        ' ': ' ',
        ',': ',',
        '.': '.',
        '#': '#',
        '*': '*',
        '!': '!',
        '?': '?',
        '<': '<',
        '>': '>',
        '=': '=',
        '+': '+',
        ':': ':',
        '-': '-',
        '\n': '\n'
    };

    function treatY(previous, next) {
        if (isVowel(next)) {
            return 'V';
        } else if (isVowel(previous)) {
            return 'F';
        } 

        return dictionary['Υ'];
    }

    function isVowel(char) {
        return vowels.some(e => e === char);
    }

    function convert() {
        var word = document.getElementById('greek').value;
        word = word.toUpperCase();

        var res = [];
        var current, next;
        for (var i = 0; i < word.length; i++) {
            previous = word.charAt(i-1);
            current = word.charAt(i);
            next = word.charAt(i + 1);

            if (next && dictionary[current + next]) {
                res.push(dictionary[current + next]);
                i++;
            } else if (current === 'Υ') {
                res.push(treatY(previous, next));
            } else {
                res.push(dictionary[current]);
            }
        }

        const result = res.join('');
        document.getElementById('farsi').textContent = result;

        if (!result) {
            alert('Is this Greek?');
        }
    }

    console.log(1);
    document.getElementById('convert').addEventListener('click', function (e) {
        convert();
    });

    document.getElementById('greek').addEventListener('keyup', function (e) {
        if (e.keyCode === 13) {
            convert();
        }
    });
}();