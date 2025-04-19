from flask import Flask, request, jsonify
from optimizers.claude_optimizer import ClaudeOptimizer
from optimizers.tip_generator import TipGenerator

app = Flask(__name__)
optimizer = ClaudeOptimizer()
tip_generator = TipGenerator()

@app.route('/analyze-code', methods=['POST'])
def analyze_code():
    data = request.get_json()
    code = data.get('code')
    if not code:
        return jsonify({'error': 'No code provided'}), 400
    try:
        analysis = optimizer.analyze_code(code)
        return jsonify({'analysis': analysis})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/recommend-optimizations', methods=['POST'])
def recommend_optimizations():
    data = request.get_json()
    analysis = data.get('analysis')
    if not analysis:
        return jsonify({'error': 'No analysis data provided'}), 400
    try:
        optimizations = optimizer.recommend_optimizations(analysis)
        tips = tip_generator.generate_tips(analysis)
        return jsonify({'optimizations': optimizations, 'tips': tips})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
