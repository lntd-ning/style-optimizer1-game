const ITEMS = [
    { id: 1, name: "Áo Gucci", type: "TOP", price: 500, coolness: 50, icon: "👕", rarity: "rare", desc: "Phong cách thượng lưu từ Ý, chất liệu cao cấp bền bỉ theo thời gian." },
    { id: 2, name: "Quần Gucci", type: "BOTTOM", price: 400, coolness: 40, icon: "👖", rarity: "rare", desc: "Sự kết hợp hoàn hảo giữa cổ điển và hiện đại, tôn lên vóc dáng." },
    { id: 3, name: "Giày Balenciaga", type: "SHOES", price: 600, coolness: 60, icon: "👟", rarity: "rare", desc: "Thiết kế phá cách, dẫn đầu xu hướng thời trang đường phố." },
    { id: 4, name: "Nhẫn Kim Cương", type: "JEWELRY", price: 1500, coolness: 150, icon: "💍", rarity: "epic", desc: "Vẻ đẹp vĩnh cửu, thu hút mọi ánh nhìn trong các buổi tiệc." },
    { id: 5, name: "Kính Râm Cool", type: "ACCESSORY", price: 200, coolness: 30, icon: "🕶️", rarity: "common", desc: "Bảo vệ đôi mắt và tăng độ ngầu tức thì dưới ánh nắng." },
    { id: 6, name: "Áo Phông Local", type: "TOP", price: 50, coolness: 5, icon: "👕", rarity: "common", desc: "Thoải mái, đơn giản, phù hợp cho mọi hoạt động hàng ngày." },
    { id: 7, name: "Quần Jean Rách", type: "BOTTOM", price: 80, coolness: 10, icon: "👖", rarity: "common", desc: "Phong cách bụi bặm, trẻ trung cho những ai yêu sự tự do." },
    { id: 8, name: "Áo Khoác Da", type: "TOP", price: 1200, coolness: 120, icon: "🧥", rarity: "epic", desc: "Chất liệu da thật cực ngầu, biểu tượng của sự mạnh mẽ." },
    { id: 9, name: "Vòng Cổ Vàng", type: "JEWELRY", price: 3000, coolness: 300, icon: "📿", rarity: "epic", desc: "Khẳng định đẳng cấp quý tộc với vàng ròng 24K." },
    { id: 10, name: "Nón Snapback", type: "ACCESSORY", price: 150, coolness: 25, icon: "🧢", rarity: "common", desc: "Phụ kiện không thể thiếu cho các tín đồ Hip-hop." },
    { id: 11, name: "Áo Vest Velvet", type: "TOP", price: 2500, coolness: 280, icon: "🧥", rarity: "epic", desc: "Nhung mịn màng, sang trọng cho những buổi dạ tiệc đỏ." },
    { id: 12, name: "Quần Âu Slimfit", type: "BOTTOM", price: 1800, coolness: 200, icon: "👖", rarity: "rare", desc: "Cắt may tinh xảo, mang lại vẻ ngoài thanh lịch, chuyên nghiệp." },
    { id: 13, name: "Giày Chelsea Boot", type: "SHOES", price: 2200, coolness: 250, icon: "👞", rarity: "rare", desc: "Vẻ ngoài tối giản nhưng đầy cuốn hút, phù hợp nhiều dịp." },
    { id: 14, name: "Đồng Hồ Rolex", type: "JEWELRY", price: 8000, coolness: 850, icon: "⌚", rarity: "legendary", desc: "Kiệt tác thời gian, biểu tượng tối thượng của thành công." },
    { id: 15, name: "Cà Vạt Lụa", type: "ACCESSORY", price: 400, coolness: 45, icon: "👔", rarity: "rare", desc: "Lụa tơ tằm mềm mại, thêm chút lịch lãm cho bộ vest của bạn." },
    { id: 16, name: "Áo Hoodie Techwear", type: "TOP", price: 1000, coolness: 110, icon: "🧥", rarity: "rare", desc: "Thời trang tương lai, đa dụng với nhiều túi và chất liệu chống thấm." },
    { id: 17, name: "Quần Cargo Multi-Pocket", type: "BOTTOM", price: 900, coolness: 95, icon: "👖", rarity: "rare", desc: "Nhiều túi tiện lợi, phong cách quân đội hiện đại." },
    { id: 18, name: "Giày Sneaker Futuristic", type: "SHOES", price: 1500, coolness: 160, icon: "👟", rarity: "epic", desc: "Bước ra từ phim khoa học viễn tưởng, êm ái và rực rỡ." },
    { id: 19, name: "Mặt Nạ Cyber", type: "ACCESSORY", price: 700, coolness: 85, icon: "🎭", rarity: "epic", desc: "Ẩn danh trong thế giới số với thiết kế đèn LED độc đáo." },
    { id: 20, name: "Bông Tai Kim Cương", type: "JEWELRY", price: 5000, coolness: 550, icon: "💎", rarity: "legendary", desc: "Lấp lánh như ngàn vì sao, chế tác thủ công tinh vi." },
    { id: 21, name: "Áo Kimono Hiện Đại", type: "TOP", price: 3000, coolness: 350, icon: "👘", rarity: "legendary", desc: "Giao thoa giữa truyền thống Á Đông và nhịp sống đô thị." },
    { id: 22, name: "Quần Hakama Cách Tân", type: "BOTTOM", price: 2500, coolness: 280, icon: "👖", rarity: "epic", desc: "Phom dáng rộng rãi, mang lại phong thái điềm tĩnh, tự tại." },
    { id: 23, name: "Dép Geta Da", type: "SHOES", price: 1200, coolness: 140, icon: "🩴", rarity: "rare", desc: "Phiên bản hiện đại của dép truyền thống Nhật Bản." },
    { id: 24, name: "Quạt Xếp Nghệ Thuật", type: "ACCESSORY", price: 600, coolness: 70, icon: "🪭", rarity: "rare", desc: "Họa tiết vẽ tay tinh xảo, phụ kiện đầy tính nghệ thuật." },
    { id: 25, name: "Trâm Cài Tóc Cổ Thạch", type: "JEWELRY", price: 4500, coolness: 480, icon: "🥢", rarity: "legendary", desc: "Đá quý tự nhiên, mang đậm hơi thở của lịch sử hào hùng." }
];

const SETS = [
    { name: "Gucci Set", itemIds: [1, 2], buff: 30 },
    { name: "Full Swag", itemIds: [1, 2, 3, 4, 5], buff: 100 },
    { name: "Secret: Cyber Ninja", itemIds: [5, 8, 3], buff: 200, secret: true },
    { name: "Secret: Diamond King", itemIds: [4, 9], buff: 500, secret: true },
    { name: "Gentleman Class", itemIds: [11, 12, 13, 14, 15], buff: 1500, secret: false },
    { name: "Cyberpunk Rebel", itemIds: [16, 17, 18, 19, 20], buff: 1200, secret: false },
    { name: "Secret: Neo Samurai", itemIds: [21, 22, 23, 24, 25], buff: 3000, secret: true },
    { name: "Secret: CEO Wealth", itemIds: [14, 11, 15], buff: 2000, secret: true },
    { name: "Secret: Street Legend", itemIds: [10, 8, 7, 3], buff: 1000, secret: true }
];

const MAX_EVENTS = 5;

let gameState = {
    balance: 1000,
    equipped: {}, // Map: type -> item
    wardrobe: [], // List of all ever purchased items
    leaderboard: [], // Top 10: {date, score, name}
    theme: 'default',
    nextEventIndex: 0,
    gameStarted: false,
    eventCount: 0,
    playerName: 'Player 1'
};

function saveState() {
    localStorage.setItem('fashionGameState', JSON.stringify(gameState));
}

function loadState() {
    const saved = localStorage.getItem('fashionGameState');
    if (saved) {
        const parsed = JSON.parse(saved);
        gameState = { ...gameState, ...parsed };
        if (gameState.theme) changeTheme(gameState.theme);
    }
}

function changeTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    gameState.theme = theme;
    saveState();
}

function init() {
    loadState();
    if (gameState.nextEventIndex === undefined) pickNextEvent();
    renderShop();
    updateUI();
    updateCharacter();
    updateHint();

    if (gameState.gameStarted) {
        document.getElementById('start-screen').style.display = 'none';
    }

    document.getElementById('next-event').addEventListener('click', processEvent);
}

function startGame() {
    const input = document.getElementById('player-name-input');
    if (input && input.value.trim() !== "") {
        gameState.playerName = input.value.trim();
    }
    gameState.gameStarted = true;
    document.getElementById('start-screen').style.display = 'none';
    saveState();
    updateUI();
}

function openModal(id) {
    document.getElementById(id).style.display = 'flex';
    if (id === 'leaderboard-modal') renderLeaderboard();
}

function switchTab(tabName) {
    // Buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase().includes(tabName === 'shop' ? 'cửa hàng' : 'tủ đồ')) {
            btn.classList.add('active');
        }
    });

    // Content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tabName}-tab`).classList.add('active');

    if (tabName === 'wardrobe') renderWardrobe();
}

function toggleModal(id, show) {
    document.getElementById(id).style.display = show ? 'flex' : 'none';
}

function closeModal(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.style.display = 'none';
    }
}

function pickNextEvent() {
    gameState.nextEventIndex = Math.floor(Math.random() * EVENT_TYPES.length);
    const eventType = EVENT_TYPES[gameState.nextEventIndex];
    const fame = 1 + Math.random() * 9;
    gameState.currentAlpha = Math.floor((5 * fame + 10) * (eventType.multiplier));
    saveState();
}

function updateHint() {
    const event = EVENT_TYPES[gameState.nextEventIndex];
    document.getElementById('event-name-hint').innerText = event.name;
    document.getElementById('event-rule-hint').innerText = event.rules.length > 0
        ? `Bắt buộc: ${event.rules.join(', ')}`
        : "Không có yêu cầu bắt buộc.";
}

function getSetForItem(itemId) {
    return SETS.find(set => set.itemIds.includes(itemId));
}

function renderShop() {
    const grid = document.getElementById('item-list');
    grid.innerHTML = '';
    ITEMS.forEach(item => {
        const itemSet = getSetForItem(item.id);
        const card = document.createElement('div');
        card.className = `item-card rarity-${item.rarity} type-${item.type}`;
        card.innerHTML = `
            <div class="card-header">
                <span class="rarity-badge">${item.rarity}</span>
                <span class="type-tag">${item.type}</span>
            </div>
            <div class="card-illustration">
                <div class="glow-sphere"></div>
                <span class="item-icon">${item.icon}</span>
            </div>
            <div class="card-info">
                <div class="name">${item.name}</div>
                ${itemSet ? `<span class="set-tag">${itemSet.name}</span>` : ''}
            </div>
            <div class="card-footer">
                <div class="stats">
                    <div class="stat-line">
                        <span class="stat-label">Độ ngầu</span>
                        <span class="cool">${item.coolness}</span>
                    </div>
                    <div class="stat-line">
                        <span class="stat-label">Giá</span>
                        <span class="price">$${item.price.toLocaleString()}</span>
                    </div>
                </div>
                <button class="buy-btn">Mua ngay</button>
            </div>
        `;
        card.onclick = () => buyAndEquip(item);
        grid.appendChild(card);
    });
}

function buyAndEquip(item) {
    if (gameState.balance >= item.price) {
        gameState.balance -= item.price;
        gameState.equipped[item.type] = item;

        // Add to wardrobe if not already there
        if (!gameState.wardrobe.some(i => i.id === item.id)) {
            gameState.wardrobe.push(item);
        }

        updateUI();
        updateCharacter();
        showNotification(`Đã mua <strong>${item.name}</strong>!`, 'success');
        flashBoughtItem(item);
        // showPurchaseModal(item); // Disable generic success modal to keep focus on shop
        renderWardrobe(); // Re-render if in wardrobe tab
        saveState();
    } else {
        showNotification("Không đủ tiền!", 'danger');
    }
}

function showNotification(message, type = 'info') {
    const container = document.getElementById('notification-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${message}</span>`;

    container.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Remove after 3s
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

function flashBoughtItem(item) {
    const display = document.getElementById('recently-bought');
    const name = document.getElementById('recent-item-name');

    name.innerText = `+ ${item.name}`;
    display.classList.add('active');

    // Hide after some time
    setTimeout(() => {
        display.classList.remove('active');
    }, 2500);
}

function showPurchaseModal(item) {
    const modal = document.getElementById('purchase-success-modal');
    const name = document.getElementById('success-item-name');
    const cool = document.getElementById('success-item-coolness');

    name.innerText = item.name;
    cool.innerText = `+${item.coolness} Cool`;

    modal.style.display = 'flex';
}

function renderWardrobe() {
    const list = document.getElementById('wardrobe-list');
    list.innerHTML = '';

    if (gameState.wardrobe.length === 0) {
        list.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: gray">Tủ đồ trống rỗng! Hãy mua sắm để làm đầy tủ đồ.</p>';
        return;
    }

    gameState.wardrobe.forEach(item => {
        const itemSet = getSetForItem(item.id);
        const div = document.createElement('div');
        div.className = `item-card rarity-${item.rarity} type-${item.type}`;
        div.innerHTML = `
            <div class="card-header">
                <span class="rarity-badge">${item.rarity}</span>
                <span class="type-tag">${item.type}</span>
            </div>
            <div class="card-illustration">
                <div class="glow-sphere"></div>
                <span class="item-icon">${item.icon}</span>
            </div>
            <div class="card-info">
                <div class="name">${item.name}</div>
                ${itemSet ? `<span class="set-tag">${itemSet.name}</span>` : ''}
            </div>
            <div class="card-footer">
                <div class="stats">
                    <div class="stat-line">
                        <span class="stat-label">Độ ngầu</span>
                        <span class="cool">${item.coolness}</span>
                    </div>
                </div>
            </div>
        `;
        list.appendChild(div);
    });
}

function updateCharacter() {
    const list = document.getElementById('equipped-items-list');
    const msg = document.getElementById('no-items-msg');
    list.innerHTML = '';

    const equippedItems = Object.values(gameState.equipped);

    if (equippedItems.length === 0) {
        msg.style.display = 'block';
    } else {
        msg.style.display = 'none';
        equippedItems.forEach(item => {
            const li = document.createElement('li');
            li.className = `equipped-item-li type-${item.type}`;
            li.innerHTML = `<span class="icon">${item.icon}</span> <span class="tag">${item.type}</span> ${item.name}`;
            list.appendChild(li);
        });
    }
}

function calculateTotalCoolness() {
    let base = Object.values(gameState.equipped).reduce((sum, item) => sum + item.coolness, 0);
    let buffs = 0;

    SETS.forEach(set => {
        const equippedIds = Object.values(gameState.equipped).map(i => i.id);
        if (set.itemIds.every(id => equippedIds.includes(id))) {
            buffs += set.buff;
            if (set.secret) {
                showNotification(`Khám phá combo bí mật: <strong>${set.name}</strong>!`, 'success');
            }
        }
    });

    return base + buffs;
}

function updateUI() {
    document.getElementById('balance').innerText = `$${Math.floor(gameState.balance).toLocaleString()}`;
    const currentCoolness = calculateTotalCoolness();
    document.getElementById('coolness').innerText = currentCoolness;
    document.getElementById('event-counter').innerText = `${gameState.eventCount}/${MAX_EVENTS}`;

    // Real-time comparison
    const event = EVENT_TYPES[gameState.nextEventIndex];
    // Calculate a rough target range based on current progress
    const targetCoolness = Math.floor(gameState.currentAlpha || 50); // Use stored alpha or default
    const comparison = document.getElementById('coolness-status');
    if (comparison) {
        const diff = targetCoolness - currentCoolness;
        if (diff <= 0) {
            comparison.innerHTML = `<span class="status-ready">✅ ĐỦ ĐỘ NGẦU (${currentCoolness}/${targetCoolness})</span>`;
        } else {
            comparison.innerHTML = `<span class="status-need">⏳ CẦN THÊM ${diff} ĐỘ NGẦU (${currentCoolness}/${targetCoolness})</span>`;
        }
    }
}

const EVENT_TYPES = [
    { name: "Show Thời Trang", multiplier: 1, rules: [] },
    { name: "Tiệc Tùng Cận Vệ", multiplier: 1.5, rules: ["TOP"] },
    { name: "Thảm Đỏ Oscar", multiplier: 3, rules: ["JEWELRY", "TOP", "BOTTOM"] },
    { name: "Phỏng Vấn Tạp Chí", multiplier: 2, rules: ["ACCESSORY"] },
    { name: "Street Style Pro", multiplier: 1.2, rules: ["SHOES"] },
    { name: "Gala Thượng Lưu", multiplier: 5, rules: ["TOP", "BOTTOM", "SHOES", "JEWELRY", "ACCESSORY"] },
    { name: "Hội Nghị Cyber", multiplier: 4, rules: ["TOP", "ACCESSORY", "SHOES"] },
    { name: "Lễ Hội Văn Hóa", multiplier: 3.5, rules: ["TOP", "BOTTOM", "ACCESSORY"] },
    { name: "Sự Kiện Bí Mật: Fashion Week", multiplier: 8, rules: ["TOP", "BOTTOM", "SHOES", "JEWELRY"] }
];

function processEvent() {
    const eventType = EVENT_TYPES[gameState.nextEventIndex];
    const fame = 1 + Math.random() * 9;
    const alpha = (5 * fame + 10) * (eventType.multiplier);
    const coolness = calculateTotalCoolness();

    const log = document.getElementById('event-log');
    const entry = document.createElement('div');

    // Item summary
    const equippedItems = Object.values(gameState.equipped);
    const itemNames = equippedItems.length > 0
        ? equippedItems.map(i => i.name).join(', ')
        : "Không mặc đồ";

    // Rule check: All mandatory types must be equipped
    const equippedTypes = Object.keys(gameState.equipped);
    const ruleViolation = eventType.rules.some(rule => !equippedTypes.includes(rule));

    if (ruleViolation) {
        const penalty = gameState.balance * 0.1; // 10% penalty
        gameState.balance -= penalty;
        entry.className = 'log-entry fail';
        entry.innerText = `[${eventType.name}] PHẠM QUY! Thiếu đồ bắt buộc (${eventType.rules.join(', ')}). Đồ đã mặc: ${itemNames}. PHẠT: -$${Math.floor(penalty)}`;
    } else if (coolness >= alpha) {
        const totalCost = equippedItems.reduce((sum, i) => sum + i.price, 0);
        // RE-BALANCED REWARDS: Challenging but fair
        const baseReward = (coolness * 25);
        const investmentBonus = 1 + (totalCost / 1000);
        const earned = baseReward * investmentBonus * eventType.multiplier;

        gameState.balance += earned;
        entry.className = 'log-entry success';
        entry.innerText = `[${eventType.name}] THÀNH CÔNG! Fame: ${fame.toFixed(1)}. Đồ đã mặc: ${itemNames}. Nhận: $${Math.floor(earned).toLocaleString()}`;
    } else {
        const penalty = 50;
        gameState.balance -= penalty;
        entry.className = 'log-entry fail';
        entry.innerText = `[${eventType.name}] THẤT BẠI! Thiếu độ ngầu. Đồ đã mặc: ${itemNames}. Bị trừ: $${penalty}`;

        const encouragement = MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];
        showNotification(encouragement, 'danger');
    }

    // RESET AFTER EVENT
    gameState.equipped = {};
    gameState.eventCount++;
    updateCharacter();
    pickNextEvent();
    updateHint();

    log.prepend(entry);
    updateUI();
    saveState();

    if (gameState.balance >= 100000) {
        showVictory();
    } else if (gameState.balance < 0 || gameState.eventCount >= MAX_EVENTS) {
        showDefeat();
    }
}

function showVictory() {
    updateLeaderboard(gameState.balance);
    const screen = document.getElementById('victory-screen');
    const stats = document.getElementById('final-stats');
    stats.innerHTML = `
        <p style="color:var(--primary); font-size:1.5rem; margin-bottom:1rem;"><strong>${gameState.playerName}</strong></p>
        <p>Tổng tài sản: $${Math.floor(gameState.balance).toLocaleString()}</p>
        <p>Số sự kiện đã tham gia: ${gameState.eventCount}</p>
    `;
    screen.style.display = 'flex';
}

function updateLeaderboard(score) {
    gameState.leaderboard.push({
        name: gameState.playerName,
        score: Math.floor(score),
        date: new Date().toLocaleDateString('vi-VN')
    });
    gameState.leaderboard.sort((a, b) => b.score - a.score);
    gameState.leaderboard = gameState.leaderboard.slice(0, 10);
    saveState();
}

function renderLeaderboard() {
    const list = document.getElementById('leaderboard-list');
    const header = list.querySelector('.leaderboard-header');
    list.innerHTML = '';
    if (header) list.appendChild(header);

    if (gameState.leaderboard.length === 0) {
        const p = document.createElement('p');
        p.style.cssText = 'text-align:center; color:gray; margin-top:1rem;';
        p.innerText = 'Chưa có kỷ lục nào.';
        list.appendChild(p);
        return;
    }
    gameState.leaderboard.forEach((entry, idx) => {
        const row = document.createElement('div');
        row.className = 'leaderboard-entry';
        row.innerHTML = `
            <span class="rank">#${idx + 1}</span>
            <span class="player-name">${entry.name || 'Anonymous'}</span>
            <span class="score">$${entry.score.toLocaleString()}</span>
        `;
        list.appendChild(row);
    });
}

function showDefeat() {
    const screen = document.getElementById('defeat-screen');
    const quoteEl = document.getElementById('defeat-quote');
    const quote = MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];
    quoteEl.innerText = `"${quote}"`;
    screen.style.display = 'flex';
}

const MOTIVATIONAL_QUOTES = [
    "Thất bại là mẹ thành công. Đừng bỏ cuộc!",
    "Mọi huyền thoại thời trang đều từng bắt đầu từ con số không.",
    "Một quý ông/quý cô thực thụ không bao giờ đầu hàng trước nghịch cảnh.",
    "Hãy coi đây là một bài học kinh nghiệm để trở lại mạnh mẽ hơn!",
    "Đôi khi chúng ta phải lùi một bước để tiến mười bước.",
    "Sáng tạo không có giới hạn, và sự kiên trì cũng vậy."
];

function shareGame() {
    const shareData = {
        title: 'Fashion Optimizer',
        text: 'Chơi Fashion Optimizer để trở thành Fashion Tycoon! Mục tiêu $100,000!',
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData).catch(err => {
            console.log('Error sharing:', err);
        });
    } else {
        // Fallback: Copy to clipboard
        const dummy = document.createElement('input');
        document.body.appendChild(dummy);
        dummy.value = shareData.url;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        showNotification('Đã copy link game vào bộ nhớ tạm!', 'success');
    }
}

function resetGame(force = false) {
    if (force || confirm("Bạn có chắc chắn muốn chơi lại từ đầu không? Số dư và tủ đồ sẽ bị xóa, nhưng Bảng xếp hạng sẽ được giữ lại.")) {
        const leaderboard = gameState.leaderboard;
        const theme = gameState.theme || 'default';
        gameState = {
            balance: 1000,
            equipped: {},
            wardrobe: [],
            leaderboard: leaderboard,
            theme: theme,
            nextEventIndex: 0,
            gameStarted: false,
            eventCount: 0,
            playerName: 'Player 1'
        };
        saveState();
        location.reload();
    }
}

window.onload = init;
