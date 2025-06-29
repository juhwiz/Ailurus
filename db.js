const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

const multer = require('multer');
const path = require('path');

app.use(cors());
app.use(express.json());

// Conexão com o banco MySQL
const db = mysql.createConnection({
  host: 'localhost',         
  user: 'root',             
  password: '',             
  database: 'ailurus_db'
});

// Teste de conexão
db.connect(err => {
  if (err) {
    console.error('Erro ao conectar no MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL');
});

module.exports = { db };

//=============================================================================

// Rota POST para cadastrar um usuário
app.post('/usuarios', (req, res) => {
  const { nome, email, numeroCel, senha } = req.body;

   console.log("Recebido:", nome, email, numeroCel, senha); // debug

  if (!nome || !email || !numeroCel || !senha) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
  }

  db.query(
    'INSERT INTO usuarios (nome, email, numeroCel, senha) VALUES (?, ?, ?, ?)',
    [nome, email, numeroCel, senha],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ erro: err });
      }

      res.json({ idUsuario: result.insertId, nome, email, numeroCel, senha});
    }
  );
});

// Rota PUT para adicionar idioma selecionado
app.put('/usuarios/:idUsuario/idioma', (req, res) => {
  const { idUsuario } = req.params;
  const { idIdiomaSelecionado } = req.body;

  db.query(
    'UPDATE usuarios SET idIdiomaSelecionado = ? WHERE idUsuario = ?',
    [idIdiomaSelecionado, idUsuario],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ erro: 'Erro ao atualizar idioma' });
      }

      res.json({ mensagem: 'Idioma atualizado com sucesso' });
    }
  );
});

// Rota POST para logar o usuário
app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  db.query(
    'SELECT * FROM usuarios WHERE email = ? AND senha = ?',
    [email, senha],
    (err, results) => {
      if (err) return res.status(500).json({ erro: 'Erro no servidor' });

      if (results.length > 0) {
        res.json({ autenticado: true, usuario: results[0] });
      } else {
        res.json({ autenticado: false });
      }
    }
  );
});

// Rota GET para buscar usuário por ID

app.get('/usuarios/:idUsuario', (req, res) => {
  const { idUsuario } = req.params;
  
  db.query('SELECT * FROM usuarios WHERE idUsuario = ?', [idUsuario], (err, results) => {
    if (err) return res.status(500).json({ erro: 'Erro no servidor' });
    if (results.length === 0) return res.status(404).json({ erro: 'Usuário não encontrado' });
    
    res.json(results[0]);
  });
});


// Pasta de destino

const storage = multer.diskStorage({
  destination: path.join(__dirname, 'src', 'uploads'),
  filename: (req, file, cb) => {
    cb(null, `perfil_${req.params.id}.jpg`);
  }
});

const upload = multer({ storage });

// Rota para UPLOAD de imagem

app.post('/upload/:id', upload.single('imagem'), (req, res) => {
  const idUsuario = req.params.id;
  const nomeImagem = req.file.filename;

  db.query(
    'UPDATE usuarios SET imagemPerfil = ? WHERE idUsuario = ?',
    [nomeImagem, idUsuario],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ erro: 'Erro ao atualizar imagem' });
      }

      res.json({ mensagem: 'Imagem salva com sucesso', imagemPerfil: nomeImagem });
    }
  );
});

// Permitir acesso à pasta
app.use('/uploads', express.static(path.join(__dirname, 'src', 'uploads')));


// Rota para POST baralho
const storageBaralho = multer.diskStorage({
  destination: 'src/uploads/',
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const nome = `baralho-${Date.now()}${ext}`;
    cb(null, nome);
  }
});

const uploadBaralho = multer({ storage: storageBaralho });

app.post('/baralhos', uploadBaralho.single('imagem'), (req, res) => {
  const { nomeBaralho, descBaralho, idUsuario } = req.body;
  const imagemBaralho = req.file ? req.file.filename : null;

  db.query(
    'INSERT INTO baralhos (nomeBaralho, descBaralho, imagemBaralho, idUsuario) VALUES (?, ?, ?, ?)',
    [nomeBaralho, descBaralho, imagemBaralho, idUsuario],
    (err, result) => {
      if (err) return res.status(500).json({ erro: 'Erro ao criar baralho' });
      res.json({ id: result.insertId, nomeBaralho, descBaralho, imagemBaralho, idUsuario });
    }
  );
});


// Rota GET para buscar baralhos por usuário

app.get('/baralhos/:idUsuario', (req, res) => {
  const { idUsuario } = req.params;

  db.query(
    'SELECT * FROM baralhos WHERE idUsuario = ?',
    [idUsuario],
    (err, results) => {
      if (err) return res.status(500).json({ erro: 'Erro ao buscar baralhos' });
      res.json(results);
    }
  );
});


// Rota POST para criar cartas

app.post('/cartas', (req, res) => {
  const { palavraCarta, significadoPalavra, frasePalavra, idBaralho } = req.body;

  const sql = `
    INSERT INTO cartas (palavraCarta, significadoPalavra, frasePalavra, contadorLembrei, contadorNaoLembrei, idBaralho)
    VALUES (?, ?, ?, 0, 0, ?)
  `;

  db.query(sql, [palavraCarta, significadoPalavra, frasePalavra, idBaralho], (err, result) => {
    if (err) {
      console.error('Erro ao inserir carta:', err);
      return res.status(500).json({ erro: 'Erro ao cadastrar carta' });
    }

    res.status(201).json({ mensagem: 'Carta criada com sucesso', idCarta: result.insertId });
  });
});

// Rota GET buscar cartas por idbaralho

app.get('/cartas/baralho/:idBaralho', (req, res) => {
    const { idBaralho } = req.params;
    db.query('SELECT * FROM cartas WHERE idBaralho = ?', [idBaralho], (err, results) => {
        if (err) return res.status(500).json({ erro: 'Erro ao buscar cartas' });
        res.json(results);
    });
});

// Rota PUT para atualizar contador das cartas 

app.put('/cartas/:idCarta', (req, res) => {
  const { idCarta } = req.params;
  const { contador } = req.body;

  let campo = '';
  if (contador === 'lembrei') campo = 'contadorLembrei';
  else if (contador === 'naoLembrei') campo = 'contadorNaoLembrei';
  else return res.status(400).json({ erro: 'Tipo inválido' });

  db.query(
    `UPDATE cartas SET ${campo} = ${campo} + 1 WHERE idCarta = ?`,
    [idCarta],
    (err) => {
      if (err) return res.status(500).json({ erro: 'Erro ao atualizar contador' });
      res.json({ sucesso: true });
    }
  );
});

// Inicializa o servidor
app.listen(port,'0.0.0.0', () => {
  console.log(`API rodando na rede em http://SEU_IP_LOCAL:${port}`);
});