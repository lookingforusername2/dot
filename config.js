/**
 * ══════════════════════════════════════════════
 *  SITE CONFIG — فقط این فایل رو ویرایش کن
 * ══════════════════════════════════════════════
 *
 *  مراحل راه‌اندازی:
 *  ۱. فایل‌ها رو داخل ریپازیتوری dot آپلود کن
 *  ۲. فایل data.json هم داخل همون ریپو باشه
 *  ۳. این فایل رو روی Cloudflare Pages آپلود کن
 *
 *  ⚡ از GitHub Raw استفاده می‌کنیم (نه jsDelivr)
 *     تغییرات بلافاصله روی سایت نمایش داده می‌شن!
 *
 *  توکن GitHub (برای پنل ادمین):
 *  github.com → Settings → Developer Settings
 *  → Personal access tokens → Tokens (classic)
 *  → Generate new token → تیک "repo" → Generate
 *  توکن رو در پنل ادمین وارد می‌کنی (نه اینجا)
 */

window.SITE_CONFIG = {
  gh_owner:  'lookingforusername2',  // ✅ تنظیم شد
  gh_repo:   'dot',                  // ✅ تنظیم شد
  gh_branch: 'main',                 // معمولاً main یا master
};

// آدرس GitHub Raw — تغییرات بلافاصله (بدون delay کش) نمایش داده می‌شن
window.SITE_CONFIG.cdn = `https://raw.githubusercontent.com/${window.SITE_CONFIG.gh_owner}/${window.SITE_CONFIG.gh_repo}/${window.SITE_CONFIG.gh_branch}`;
