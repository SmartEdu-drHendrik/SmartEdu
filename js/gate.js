/**
 * Gate.js — Data & Logic for the Antrian Reward SEA page.
 * 
 * ============================================================
 * 📌 CARA MEMASUKKAN DATA:
 * ============================================================
 * Ubah isi array di bawah ini untuk menambah/menghapus/mengedit
 * data pada masing-masing Gate.
 * 
 * Format setiap entri:
 *   { nama: "Nama Orang", jp: "Nilai JP" }
 * 
 * Nomor urut (NO) akan dihasilkan secara otomatis.
 * 
 * 📌 PENGATURAN PAGINATION:
 * Ubah nilai ROWS_PER_PAGE di bawah untuk mengatur
 * jumlah baris per halaman (default: 10).
 * ============================================================
 */

const ROWS_PER_PAGE = 10;

const gateData = {
    // ===== GATE 1 =====
    1: [
        { nama: "L.M. Iwan Ashadi", jp: "20" },
        { nama: "Suparman", jp: "12" },
        { nama: "Dhiana adi", jp: "10" },
        { nama: "Ismail Bica", jp: "7" },
        { nama: "Triyono", jp: "7" },
        { nama: "Nurhasan Andi", jp: "3" },
        { nama: "Hery cristianto", jp: "2" },
        { nama: "Ai Muflihah", jp: "2" },
        { nama: "Dwi Sediono", jp: "1" },
        { nama: "Eka Gunawan", jp: "1" },
        { nama: "Abdul Salam", jp: "1" },
        { nama: "Irwansyah Panggabean", jp: "1" },
        { nama: "Ichsan Azhary", jp: "1" },
        { nama: "Respati Ferdyantony", jp: "1" },
        { nama: "Hana", jp: "1" },
        { nama: "R. Lilis Liswat", jp: "1" },
        { nama: "Anwar halim", jp: "" },
        { nama: "Ani Sri rahayu", jp: "" },
        { nama: "Sopyan", jp: "" },
        { nama: "Hendrieatna", jp: "" },
        { nama: "Rudi Iskandar", jp: "" },
        { nama: "Aris Malewa", jp: "" },
        { nama: "Mirna Dwikomala ", jp: "" },
        { nama: "Benny Sugiarto", jp: "" },
        { nama: "Ismawati", jp: "" },
        { nama: "Maria", jp: "" },
        { nama: "Siti Fatimah", jp: "" },
        { nama: "Ria Indramaya", jp: "" },
        { nama: "Sholihin", jp: "" },
        { nama: "Murni Suwarsi", jp: "" },
        { nama: "Suratno", jp: "" },
        { nama: "Achmad ridwan", jp: "" },
        { nama: "Agustiar", jp: "" },
        { nama: "Meta prasasti", jp: "" },
        { nama: "Rosalina", jp: "" },
        { nama: "Sudirman", jp: "" },
        { nama: "Usup", jp: "" },
        { nama: "Novi Badriyah", jp: "" },
        { nama: "Muhamaad Rusli", jp: "" },
        { nama: "Muniroh", jp: "" },
        { nama: "Mercy Anna", jp: "" },
        { nama: "Ani dewi Kania", jp: "" },
        { nama: "Mimid", jp: "" },
        { nama: "Mbadi Lindi", jp: "" },
        { nama: "Asep Hilman", jp: "" },
        { nama: "Maulida fitriani", jp: "" },
        { nama: "Tri Purnomo", jp: "" },
        { nama: "Retri flori", jp: "" },
        { nama: "Thiur", jp: "" },
        { nama: "Milatina", jp: "" },
        { nama: "Mery susanna", jp: "" },
        { nama: "Sabar Hasiholan", jp: "" },
        { nama: "Atik Siti Chadijah", jp: "" },
        { nama: "Andika Attas", jp: "" },
        { nama: "Yeti Komalasari", jp: "" },
        { nama: "Mulya Ningsih", jp: "" },
        { nama: "Deden Hidayat", jp: "" },
        { nama: "Ida Widaningsih", jp: "" },
        { nama: "Nur Kumalasari", jp: "" },
        { nama: "Rabiatul Adawiyah", jp: "" },
        { nama: "Mulyanto", jp: "" },
        { nama: "Ovie Hendayani", jp: "" },
        { nama: "Rika Erikawati", jp: "" },
        { nama: "Amel zen", jp: "" },
        { nama: "Siti Hoeriah", jp: "" },
        { nama: "Mandy Sumaraw", jp: "" },
        { nama: "Fariq Muhammad Alghani", jp: "" },
        { nama: "Lutfi", jp: "" },
        { nama: "Peny Yudawati", jp: "" },
        { nama: "Liya novi Yanti", jp: "" },
        { nama: "Tajuddin", jp: "" },
        { nama: "India Prasetio", jp: "" },
        { nama: "Zarleni", jp: "" },
        { nama: "Aswinsyah", jp: "" },
        { nama: "Tin ramayanti", jp: "" },
        { nama: "Evi Zakkiyyah", jp: "" },
        { nama: "H. Zainal Abidin", jp: "" },
        { nama: "Liah Rahmawati", jp: "" },
        { nama: "Sutaryono", jp: "" },
        { nama: "Ida Farida", jp: "" },
        { nama: "Putut Adi Nugroho", jp: "" },
        { nama: "jojo", jp: "" },
        { nama: "Marhaena", jp: "" },
        { nama: "Furqon munir", jp: "" },
        { nama: "Dadang Safaat", jp: "" },
        { nama: "Dede Sodikin", jp: "" },
        { nama: "Bambang Irawan", jp: "" },
        { nama: "Nasrudin", jp: "" },
        { nama: "harry afandi", jp: "" },
        { nama: "Tyas M", jp: "" },
        { nama: "Warum", jp: "" },
        { nama: "Rahmat hidayat", jp: "" },
        { nama: "Drajat", jp: "" },
        { nama: "Pagi", jp: "" },
        { nama: "I kadek Jemi", jp: "" },
        { nama: "Usman", jp: "" },
        { nama: "Utami Pratamasari", jp: "" },
        { nama: "Isti Wahyuni", jp: "" },
        { nama: "Sri henianti", jp: "" },
        { nama: "Suharno", jp: "" },
        { nama: "Herlina sulistiyani", jp: "" },
        { nama: "Nurhayati", jp: "" },
        { nama: "Sugiyanto", jp: "" },
        { nama: "Imam Zamroni", jp: "" },
        { nama: "Siti Aminatuz", jp: "" },
        { nama: "TinTin Rohaeni", jp: "" },
        { nama: "Syaifullah Mawengkang", jp: "" },
        { nama: "Titi Pratiwi", jp: "" },
        { nama: "Reni Kartika", jp: "" },
        { nama: "Eka Ayu", jp: "" },
        { nama: "Neni Rosyana", jp: "" },
        { nama: "Dindin", jp: "" },
        { nama: "H. Musatafa", jp: "" },
        { nama: "Yunita Sophia", jp: "" },
        { nama: "Suciani", jp: "" },
        { nama: "Suciani", jp: "" },
        { nama: "Ahmad Salihin", jp: "" },
        { nama: "satiri", jp: "" },
        { nama: "Sofyan setya", jp: "" },
        { nama: "Suheri", jp: "" },
        { nama: "Ichwan", jp: "" },
        { nama: "Aulia rachman", jp: "" },
        { nama: "Sudirman", jp: "" },
        { nama: "Rohana", jp: "" },
        { nama: "Rosmiah", jp: "" },
        { nama: "Asyika Fauzia", jp: "" },
        { nama: "Andika", jp: "" },
        { nama: "Moch. Nasrulloh", jp: "" },
        { nama: "Andi Setyono", jp: "" },
        { nama: "Herdian", jp: "" },
        { nama: "Nizwardi Azka", jp: "" },
        { nama: "Waseudin", jp: "" },
        { nama: "Rika Elfianti", jp: "" },
        { nama: "Lidrian Arifan", jp: "" },
        { nama: "Mulyono", jp: "" },
        { nama: "Asep Jaluli", jp: "" },
        { nama: "Ahmad Faturohman", jp: "" },
        { nama: "Wira Chandrawati", jp: "" },
        { nama: "Suroso", jp: "" },
        { nama: "Budiyono", jp: "" },
        { nama: "Indra Hamita", jp: "" },
        { nama: "Mira", jp: "" },
        { nama: "Inggrit", jp: "" },
        { nama: "Baiq Nova", jp: "" },
        { nama: "Dwi Pramono", jp: "" },
        { nama: "Sri lestari", jp: "" },
        { nama: "Resa Turosi", jp: "" },
        { nama: "Vincent", jp: "" },
        { nama: "Agus Tono", jp: "" },
        { nama: "Muhammad Fuad S.", jp: "" },
        { nama: "jafar Shodiq", jp: "" },
        { nama: "Endah tetrarini", jp: "" },




    ],

    // ===== GATE 2 =====
    2: [
        { nama: "Mukhtar lutfi", jp: "25" },
        { nama: "Agus santoso", jp: "11" },
        { nama: "Tjetjep H.", jp: "10" },
        { nama: "Sari dewi", jp: "8" },
        { nama: "Carna Wiharja", jp: "8" },
        { nama: "Jalaludin", jp: "8" },
        { nama: "Wawan", jp: "6" },
        { nama: "Hamdani", jp: "6" },
        { nama: "Doni Prasetyo", jp: "5" },
        { nama: "Adi Prakoso", jp: "5" },
        { nama: "Nurjaman", jp: "5" },
        { nama: "Usman Achmad Saefullah", jp: "4" },
        { nama: "Endang", jp: "4" },
        { nama: "Hadi permana", jp: "3" },
        { nama: "Budi Irawan", jp: "2" },
    ],

    // ===== GATE 3 =====
    3: [
        { nama: "Herawati", jp: "25" },
    ],
};

// ============================================================
// Logic — Search, Pagination, Rendering
// ============================================================

const gateIcons = {
    1: 'ri-shield-star-line',
    2: 'ri-vip-crown-line',
    3: 'ri-trophy-line',
};

const gateValue = {
    1: "(500.000)",
    2: "(2.000.000)",
    3: "(2.500.000)",
}

let currentGate = 1;
let currentPage = 1;
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.gate-tab');
    const tableBody = document.getElementById('gate-table-body');
    const tableTitle = document.getElementById('gate-table-title');
    const entryCount = document.getElementById('gate-entry-count');
    const emptyState = document.getElementById('gate-empty');
    const tableEl = document.querySelector('.table-responsive');
    const paginationEl = document.getElementById('gate-pagination');
    const pageNumbers = document.getElementById('page-numbers');
    const prevBtn = document.getElementById('page-prev');
    const nextBtn = document.getElementById('page-next');
    const searchInput = document.getElementById('gate-search');
    const gatePanel = document.querySelector('.gate-panel');

    if (!tableBody || !tabs.length) return;

    // Filter data by search query
    function getFilteredData() {
        const data = gateData[currentGate] || [];
        if (!searchQuery) return data;
        return data.filter(entry =>
            entry.nama.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    // Render the table for the current gate, page, and search
    function render() {
        const allData = getFilteredData();
        const totalPages = Math.max(1, Math.ceil(allData.length / ROWS_PER_PAGE));

        // Clamp currentPage
        if (currentPage > totalPages) currentPage = totalPages;
        if (currentPage < 1) currentPage = 1;

        const startIdx = (currentPage - 1) * ROWS_PER_PAGE;
        const pageData = allData.slice(startIdx, startIdx + ROWS_PER_PAGE);

        // Update title
        if (tableTitle) {
            tableTitle.innerHTML = `<i class="${gateIcons[currentGate]}"></i> Gate ${currentGate} ${gateValue[currentGate]}`;
        }



        // Update entry count (show filtered vs total)
        if (entryCount) {
            const totalRaw = (gateData[currentGate] || []).length;
            if (searchQuery && allData.length !== totalRaw) {
                entryCount.textContent = `${allData.length} dari ${totalRaw} Entri`;
            } else {
                entryCount.textContent = `${allData.length} Entri`;
            }
        }

        // Clear table
        tableBody.innerHTML = '';

        if (allData.length === 0) {
            if (tableEl) tableEl.style.display = 'none';
            if (emptyState) {
                emptyState.style.display = 'flex';
                emptyState.querySelector('p').textContent = searchQuery
                    ? `Tidak ditemukan hasil untuk "${searchQuery}"`
                    : 'Belum ada data untuk gate ini.';
            }
            if (paginationEl) paginationEl.style.display = 'none';
            return;
        }

        if (tableEl) tableEl.style.display = 'block';
        if (emptyState) emptyState.style.display = 'none';

        // Populate rows with original index number
        pageData.forEach((entry, index) => {
            const globalIndex = startIdx + index + 1;
            const row = document.createElement('tr');

            // Highlight search match
            let displayName = entry.nama;
            if (searchQuery) {
                const regex = new RegExp(`(${searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
                displayName = entry.nama.replace(regex, '<mark>$1</mark>');
            }

            row.innerHTML = `
                <td class="cell-no">${globalIndex}</td>
                <td class="cell-nama">${displayName}</td>
                <td class="cell-jp">${entry.jp}</td>
            `;
            row.style.animationDelay = `${index * 0.04}s`;
            tableBody.appendChild(row);
        });

        // Render pagination
        renderPagination(totalPages);
    }

    // Render pagination buttons
    function renderPagination(totalPages) {
        if (!paginationEl || !pageNumbers) return;

        if (totalPages <= 1) {
            paginationEl.style.display = 'none';
            return;
        }

        paginationEl.style.display = 'flex';
        pageNumbers.innerHTML = '';

        // Determine visible page range (max 5 buttons)
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, startPage + 4);
        if (endPage - startPage < 4) {
            startPage = Math.max(1, endPage - 4);
        }

        for (let i = startPage; i <= endPage; i++) {
            const btn = document.createElement('button');
            btn.className = `page-num${i === currentPage ? ' active' : ''}`;
            btn.textContent = i;
            btn.addEventListener('click', () => {
                currentPage = i;
                render();
            });
            pageNumbers.appendChild(btn);
        }

        // Prev/Next state
        prevBtn.disabled = currentPage <= 1;
        nextBtn.disabled = currentPage >= totalPages;
    }

    // Event: Tab click
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentGate = parseInt(tab.getAttribute('data-gate'));
            currentPage = 1;

            // Update panel theme
            if (gatePanel) {
                gatePanel.setAttribute('data-gate', currentGate);
            }

            render();
        });
    });

    // Event: Prev/Next
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) { currentPage--; render(); }
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const totalPages = Math.ceil(getFilteredData().length / ROWS_PER_PAGE);
            if (currentPage < totalPages) { currentPage++; render(); }
        });
    }

    // Event: Search (debounced)
    let searchTimeout;
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                searchQuery = e.target.value.trim();
                currentPage = 1;
                render();
            }, 250);
        });
    }

    // Initial render
    render();
});
