
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  background: radial-gradient(circle at top, #26394c, #101722 65%);
  color: #f4f6fa;
  font-family: Arial, sans-serif;
}

.container {
  width: min(1000px, calc(100% - 28px));
  margin: 30px auto;
}

header {
  text-align: center;
  margin-bottom: 25px;
}

.tag {
  color: #61e6cf;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 3px;
}

h1 {
  font-size: clamp(28px, 5vw, 48px);
  margin: 8px 0;
  letter-spacing: 2px;
}

h1 span {
  color: #61e6cf;
}

.subtitle {
  color: #bac7d4;
}

.panel {
  padding: 25px;
  background: #192532;
  border: 1px solid #3a5061;
  border-radius: 14px;
  box-shadow: 0 15px 40px #0006;
}

.panel h2 {
  text-align: center;
  margin-top: 0;
  color: #61e6cf;
}

.players {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin: 20px 0;
}

.player-card {
  padding: 20px;
  background: #223343;
  border: 1px solid #405a6d;
  border-radius: 10px;
}

.player-card h3 {
  color: #61e6cf;
  margin-top: 0;
}

label {
  display: block;
  margin: 15px 0 7px;
  color: #dce6ed;
  font-size: 14px;
}

select {
  width: 100%;
  padding: 12px;
  color: white;
  background: #101a24;
  border: 1px solid #536b7c;
  border-radius: 7px;
  font-size: 15px;
}

.controls {
  color: #b4c4d0;
  font-size: 13px;
  margin-bottom: 0;
}

button {
  display: block;
  width: 100%;
  margin-top: 22px;
  padding: 15px;
  background: #61e6cf;
  color: #10202a;
  border: 0;
  border-radius: 8px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: .2s;
}

button:hover {
  background: #8bffea;
  transform: translateY(-2px);
}

button.secondary {
  background: #354b5d;
  color: white;
  margin-top: 10px;
}

.race-info {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 15px;
  font-size: 14px;
}

.race-info strong {
  color: #61e6cf;
  margin-left: 8px;
}

canvas {
  display: block;
  width: 100%;
  height: auto;
  background: #263b32;
  border: 3px solid #72828b;
  border-radius: 8px;
}

.instructions {
  display: flex;
  justify-content: space-around;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 15px;
  color: #c5d2dc;
  font-size: 14px;
}

#result {
  text-align: center;
}

#result h2 {
  font-size: 30px;
}

#result p:not(.tag) {
  color: #c5d2dc;
}

footer {
  text-align: center;
  padding: 22px 0;
  color: #8295a5;
  font-size: 11px;
  letter-spacing: 2px;
}

[hidden] {
  display: none !important;
}

@media (max-width: 650px) {
  .players {
    grid-template-columns: 1fr;
  }

  .panel {
    padding: 15px;
  }

  .race-info {
    font-size: 12px;
  }
}

