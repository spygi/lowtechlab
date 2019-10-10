"""
"καλησπερα" -> "kalispera"
"γεια" -> "yia"

data structures: array, dictionary/object/map
array: [23,13,45]
//         ^  ^  ^
// index   0  1  2 
// array[0] -> 23
// array[1] -> 13


// map:   {23,   13,   45}
//         ^     ^     ^
// index   hello world abcd
// map["hello"] -> 23
// map["abcd"] -> 45

// "κ" > "k"
// "ε"> "e"
// "ει" > "i"
// "θ" > "th" // thing vs that
// ξ > ks, x
//  Λεσβος > lesvos
> babas
"""
dictionary = {
    'Λ': 'L',
    'Ε': 'E', # Le
    'Σ': 'S', # Les
    'β': 'v',
    'ο': 'o',
    'ς': 's',
    'λ': 'l',
    ' ': ' '
}
def pronounce(greekWord):
    latinLetters = ''

    for ch in greekWord:
        ch = ch.capitalize()
        latinLetters += dictionary[ch]
    
    return latinLetters

print(pronounce('λες Λες')) # Λες, ΛEς

# Have more letters, punctuation TODO
# Case sensitive? OK