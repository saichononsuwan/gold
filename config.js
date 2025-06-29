// config.js - ไฟล์การตั้งค่า
const LIFF_ID = '2001999682-dWEJJ4Gv';
const API_URL = 'https://script.google.com/macros/s/AKfycbxduvzUUPfMsIVWZDQtOT8hwIcFoloV1Xlza128EHJpjMQ-Oe0kGqF7c5CM4156Yied9g/exec';
const GOLD_PRICE_API = 'https://script.google.com/macros/s/AKfycbwgvstkxFOR9p6zOV2d8iEGagbpQ6h8C3BhPnDCoB56jvmbAwSG0A9a36r6oRxNkBXQ/exec';
const GRAMS_PER_BAHT = 15.244;
//const SLIP_FOLDER_ID = '1N77dPa4SpWgTddnCp7QpCwJMpgb206SQ';
const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png'];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

// Global Variables
let currentGoldPrices = {
    bar: { buyPrice: 0, sellPrice: 0 },
    ornament: { buyPrice: 0, sellPrice: 0 }
};
let BANK_ACCOUNTS = {};
