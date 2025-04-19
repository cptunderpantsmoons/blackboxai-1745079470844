class TipGenerator:
    def __init__(self):
        pass

    def generate_tips(self, analysis):
        tips = []
        if not analysis:
            return tips

        if analysis.get('image_size', 0) > 500:
            tips.append({
                'title': 'Compress Images',
                'detail': f"Save {analysis.get('image_savings', 'N/A')}KB by using WebP",
                'impact': '15% load time reduction'
            })
        if analysis.get('unused_js', 0) > 30:
            tips.append({
                'title': 'Tree Shaking',
                'detail': f"{analysis.get('unused_js')}KB unused JavaScript",
                'impact': '10% processing energy reduction'
            })
        # Add more tips based on analysis as needed
        return tips
