const compositions = {
    1: { 
        muscle: 25, 
        goodfat: 35, 
        visceral: 40, 
        statusClass: 'warning', 
        title: 'Metabolic Hazard (BMI 21)', 
        desc: 'High visceral fat surrounding internal organs acts as an active endocrine disruptor, making her less metabolically healthy than many individuals with higher BMIs.' 
    },
    2: { 
        muscle: 60, 
        goodfat: 35, 
        visceral: 5, 
        statusClass: 'healthy', 
        title: 'Excellent Metabolic Fitness (BMI 24)', 
        desc: 'High muscle mass acts as a metabolic sink for glucose clearance, shielding the cardiovascular system despite the heavier absolute scale weight.' 
    },
    3: { 
        muscle: 45, 
        goodfat: 35, 
        visceral: 20, 
        statusClass: 'complex', 
        title: 'Metabolically Protected Obesity (BMI 36)', 
        desc: 'While absolute weight is high, substantial muscle presence preserves exceptional structural mobility and improves insulin sensitivity metrics compared to Subject A.' 
    }
};

function selectSubject(id) {
    document.querySelectorAll('.subject-card').forEach(card => card.classList.remove('active'));
    document.getElementById(`card${id}`).classList.add('active');

    for (let i = 1; i <= 3; i++) {
        document.getElementById(`bar${i}-muscle`).style.height = '0%';
        document.getElementById(`bar${i}-goodfat`).style.height = '0%';
        document.getElementById(`bar${i}-visceral`).style.height = '0%';

        document.getElementById(`bar${i}-muscle`).textContent = '';
        document.getElementById(`bar${i}-goodfat`).textContent = '';
        document.getElementById(`bar${i}-visceral`).textContent = '';
    }

    setTimeout(() => {
        const data = compositions[id];

        const mBar = document.getElementById(`bar${id}-muscle`);
        const gBar = document.getElementById(`bar${id}-goodfat`);
        const vBar = document.getElementById(`bar${id}-visceral`);

        mBar.style.height = data.muscle + '%';
        gBar.style.height = data.goodfat + '%';
        vBar.style.height = data.visceral + '%';

        mBar.textContent = data.muscle + '%';
        gBar.textContent = data.goodfat + '%';
        vBar.textContent = data.visceral + '%';

        const panel = document.getElementById('statusPanel');
        panel.className = `status-panel ${data.statusClass}`;
        document.getElementById('statusTitle').textContent = data.title;
        document.getElementById('statusDesc').textContent = data.desc;
    }, 50);
}

window.onload = () => {
    selectSubject(1);
};
