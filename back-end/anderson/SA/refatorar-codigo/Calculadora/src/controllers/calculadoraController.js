export function soma(req, res) {
    const { a, b } = req.body;
    
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ erro: 'Os valores "a" e "b" precisam ser números.' });
    }

    res.json({ resultado: a + b });
};

export function subtrai(req, res) {
    const { a, b } = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ erro: 'Os valores "a" e "b" precisam ser números.' });
    }

    res.json({ resultado: a - b });
};

export function multiplica(req, res) {
    const { a, b } = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ erro: 'Os valores "a" e "b" precisam ser números.' });
    }

    res.json({ resultado: a * b });
};

export function divide(req, res) {
    const { a, b } = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ erro: 'Os valores "a" e "b" precisam ser números.' });
    }

    if (b === 0) {
        return res.status(400).json({ erro: 'Divisão por zero não é permitida.' });
    }
    
    res.json({ resultado: a / b });
};

export function eleva(req, res) {
    const { a, b } = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ erro: 'Os valores "a" e "b" precisam ser números.' });
    };
    
    res.json({ resultado: a ** b })
};
