const translations = {
  vi: {
    skip: "Bỏ qua điều hướng", menu: "Menu", navLabel: "Điều hướng chính", navHome: "Trang chủ", navAbout: "Giới thiệu", navProjects: "Dự án", navResearch: "Nghiên cứu", navContact: "Liên hệ",
    profileLabel: "Tóm tắt hồ sơ", profileLead: "Junior Security Engineer. Ở giữa tín hiệu, bằng chứng và phản ứng.", location: "Hà Nội, Việt Nam", academyShort: "Học viện Kỹ thuật Mật mã", selectedWork: "Dự án chọn lọc", availability: "Quan tâm các vị trí Security Engineering, SOC và DFIR",
    introTitle: "Điều tra kỹ. Tự động hóa có kiểm soát.", introCopy: "Tôi xây dựng năng lực ở giao điểm giữa vận hành SOC, điều tra số, phân tích mã độc và detection engineering. Mục tiêu của tôi là biến dữ liệu rời rạc thành kết luận có thể kiểm chứng và quy trình có thể lặp lại.", notesMetric: "trang ghi chú kỹ thuật", socMetric: "bắt đầu kinh nghiệm SOC", gradMetric: "dự kiến tốt nghiệp",
    exploreProjects: "Khám phá dự án", readProfile: "Đọc hồ sơ", recentWork: "Dự án gần đây", viewAll: "Xem tất cả", agenticShort: "Pipeline SOC kết hợp ELK, Shuffle, Redis, TheHive và các AI agent có human approval.", certShort: "Mã hóa, ký số và xác minh tài liệu bằng chứng thư số trên Windows.", researchRoute: "Khám phá research notes", contactRoute: "Liên hệ và trao đổi", projectsRoute: "Xem các dự án",
    aboutTitle: "Xây dựng năng lực từ bằng chứng.", aboutLead: "Tôi tiếp cận sự cố như một bài toán hệ thống: giữ nguyên ngữ cảnh, xây dựng giả thuyết có thể kiểm chứng và chuyển kết quả điều tra thành quy trình lặp lại được.", aboutMe: "Giới thiệu", aboutP1: "Mối quan tâm hiện tại của tôi nằm ở giao điểm giữa detection engineering, DFIR và AI hỗ trợ SOC—nơi tự động hóa phải tăng tốc phân tích mà không che khuất bằng chứng hay quyền kiểm soát của analyst.", aboutP2: "Tôi ưu tiên timeline, provenance và kết luận gắn với bằng chứng; với automation, tôi giữ analyst trong vòng phê duyệt và duy trì audit trail rõ ràng.",
    experienceTitle: "Kinh nghiệm & đào tạo", present: "Hiện tại", vsecText: "Giám sát và điều tra cảnh báo; malware analysis, threat hunting và forensic trên Windows/Linux; mô phỏng tấn công web để đánh giá security controls; làm việc với SIEM, SOAR và XDR.", academy: "Học viện Kỹ thuật Mật mã", degree: "Kỹ sư An toàn thông tin · GPA 3.19 / 4.0 · Dự kiến tốt nghiệp 01/2027.", ongoingTime: "Liên tục", practiceText: "Thực hành Reverse Engineering, Digital Forensics, web security labs và các tình huống điều tra Sherlocks.", toolkitTitle: "Toolkit", platforms: "Nền tảng", testing: "Kiểm thử", languages: "Ngôn ngữ",
    projectsPageTitle: "Dự án bảo mật chọn lọc.", projectsPageLead: "Các dự án được chọn theo mức độ liên quan tới Cyber Security và mức độ sở hữu kỹ thuật; các repository sưu tầm hoặc fork không được tính là sản phẩm cá nhân.", projectsTitle: "Dự án chọn lọc", ongoing: "Đang phát triển", publicLab: "Dự án lab công khai", learningProject: "Dự án học tập", openRepository: "Mở repository", agenticText: "Hệ thống tích hợp ELK, Shuffle SOAR, Redis, TheHive và các AI agent chuyên trách. Pipeline xử lý alert theo hai tầng: chuẩn hóa, deduplication, correlation và enrichment trước khi chuyển sang incident playbook có analyst phê duyệt.", agenticP1: "Chuẩn hóa alert, entity và observable trước correlation.", agenticP2: "Correlation keys theo rule, group-by scope và time window.", agenticP3: "Planner, Hunter, Assessment và Summary agents với human approval.", certText: "Ứng dụng Windows minh họa mã hóa, giải mã, ký số và xác minh tài liệu bằng chứng thư số; hỗ trợ .cer, .crt, .pfx và .p12.", web3Text: "DApp chạy trên mạng cục bộ, triển khai smart contract nạp/rút test ETH bằng Solidity, Hardhat, Ganache, MetaMask, React và ethers v6.",
    researchPageTitle: "Ghi chép để điều tra tốt hơn.", researchPageLead: "Một chỉ mục chọn lọc từ hệ thống ghi chú cá nhân, bài lab và CTF write-up về SOC, DFIR, malware, reverse engineering và web security.", researchTitle: "Research log", note1Title: "Từ alert rời rạc tới incident có ngữ cảnh", note1Text: "Alert normalization, Sigma correlation, Redis keys, deduplication, entity extraction và case routing.", note2Text: "Live-response artifacts, bằng chứng volatile và phần dữ liệu phục hồi từ deleted storage.", note3Text: "Memory/disk forensics, process injection, DPAPI và chuỗi dấu vết ransomware.", note4Text: "Lọc traffic quy mô lớn và truy tìm bất thường trong token, cookie, signature và HTTP metadata.", privacyNote: "Các write-up đầy đủ được giữ riêng để không công khai lời giải hoặc dữ liệu nhạy cảm; có thể trao đổi trong phỏng vấn khi phù hợp.", knowledgeMap: "Bản đồ kiến thức",
    contactTitle: "Trao đổi về Security Engineering.", contactText: "Nếu bạn đang tìm một Junior Security Engineer có nền tảng SOC, DFIR và thói quen nghiên cứu có hệ thống, hãy liên hệ với tôi.", targetRoles: "Vai trò quan tâm", cvNote: "CV chi tiết và các write-up riêng có thể được cung cấp khi phù hợp. Số điện thoại không được công khai trên website.",
    backTop: "Lên đầu trang", backHome: "Về trang chủ"
  },
  en: {
    skip: "Skip to content", menu: "Menu", navLabel: "Primary navigation", navHome: "Home", navAbout: "About", navProjects: "Projects", navResearch: "Research", navContact: "Contact",
    profileLabel: "Profile summary", profileLead: "Junior Security Engineer. Somewhere between signal, evidence, and response.", location: "Hanoi, Vietnam", academyShort: "Academy of Cryptography Techniques", selectedWork: "Selected work", availability: "Interested in Security Engineering, SOC, and DFIR roles",
    introTitle: "Investigate deeply. Automate responsibly.", introCopy: "I build at the intersection of SOC operations, digital forensics, malware analysis, and detection engineering. My goal is to turn fragmented data into testable conclusions and repeatable workflows.", notesMetric: "pages of technical notes", socMetric: "SOC experience started", gradMetric: "expected graduation",
    exploreProjects: "Explore projects", readProfile: "Read profile", recentWork: "Recent work", viewAll: "View all", agenticShort: "A SOC pipeline combining ELK, Shuffle, Redis, TheHive, and human-approved AI agents.", certShort: "Document encryption, digital signing, and certificate verification on Windows.", researchRoute: "Explore research notes", contactRoute: "Get in touch", projectsRoute: "View projects",
    aboutTitle: "Building capability from evidence.", aboutLead: "I approach incidents as systems problems: preserve context, form testable hypotheses, and turn investigation results into repeatable workflows.", aboutMe: "About me", aboutP1: "My current interests sit at the intersection of detection engineering, DFIR, and AI-assisted SOC—where automation should accelerate analysis without obscuring evidence or analyst control.", aboutP2: "I prioritize timelines, provenance, and evidence-linked conclusions; in automation, I keep analysts in the approval loop and maintain a clear audit trail.",
    experienceTitle: "Experience & education", present: "Present", vsecText: "Monitor and investigate alerts; perform malware analysis, threat hunting, and Windows/Linux forensics; simulate web attacks to validate security controls; work across SIEM, SOAR, and XDR.", academy: "Academy of Cryptography Techniques", degree: "B.Eng. in Cyber Security · GPA 3.19 / 4.0 · Expected January 2027.", ongoingTime: "Ongoing", practiceText: "Hands-on work in Reverse Engineering, Digital Forensics, web security labs, and Hack The Box Sherlock investigations.", toolkitTitle: "Toolkit", platforms: "Platforms", testing: "Testing", languages: "Languages",
    projectsPageTitle: "Selected security projects.", projectsPageLead: "Projects are selected for Cyber Security relevance and clear technical ownership; collected resources and forks are not presented as original work.", projectsTitle: "Selected projects", ongoing: "In progress", publicLab: "Public lab project", learningProject: "Learning project", openRepository: "Open repository", agenticText: "A system integrating ELK, Shuffle SOAR, Redis, TheHive, and specialized AI agents. Its two-stage pipeline normalizes, deduplicates, correlates, and enriches alerts before routing them into analyst-approved incident playbooks.", agenticP1: "Normalize alerts, entities, and observables before correlation.", agenticP2: "Build correlation keys around rules, group-by scopes, and time windows.", agenticP3: "Separate Planner, Hunter, Assessment, and Summary agents with human approval.", certText: "A Windows application demonstrating document encryption, decryption, digital signing, and verification with certificates in .cer, .crt, .pfx, and .p12 formats.", web3Text: "A local dApp implementing test-ETH deposits and withdrawals with Solidity, Hardhat, Ganache, MetaMask, React, and ethers v6.",
    researchPageTitle: "Notes for better investigations.", researchPageLead: "A selected index from a private knowledge base, hands-on labs, and CTF write-ups across SOC, DFIR, malware, reverse engineering, and web security.", researchTitle: "Research log", note1Title: "From isolated alerts to context-rich incidents", note1Text: "Alert normalization, Sigma correlation, Redis keys, deduplication, entity extraction, and case routing.", note2Text: "Live-response artifacts, volatile evidence, and remnants recovered from deleted storage.", note3Text: "Memory and disk forensics, process injection, DPAPI, and a ransomware evidence trail.", note4Text: "Filtering large-scale traffic and tracing anomalies in tokens, cookies, signatures, and HTTP metadata.", privacyNote: "Full write-ups remain private to avoid exposing solutions or sensitive material; they can be discussed in interviews when appropriate.", knowledgeMap: "Knowledge map",
    contactTitle: "Let’s talk Security Engineering.", contactText: "If you are looking for a Junior Security Engineer with SOC and DFIR foundations and a disciplined research habit, I would be glad to connect.", targetRoles: "Target roles", cvNote: "A detailed CV and private write-ups are available when appropriate. My phone number is intentionally not published on this website.",
    backTop: "Back to top", backHome: "Back home"
  }
};

const root = document.documentElement;
const toggle = document.querySelector(".language-toggle");
const languageLabels = toggle?.querySelectorAll("span") || [];
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

function setLanguage(language) {
  const lang = translations[language] ? language : "vi";
  const dictionary = translations[lang];
  root.lang = lang;
  root.dataset.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAria];
    if (value) element.setAttribute("aria-label", value);
  });
  languageLabels[0]?.classList.toggle("active", lang === "vi");
  languageLabels[1]?.classList.toggle("active", lang === "en");
  toggle?.setAttribute("aria-pressed", String(lang === "en"));
  toggle?.setAttribute("aria-label", lang === "vi" ? "Switch to English" : "Chuyển sang tiếng Việt");
  const pageTitles = {
    home: lang === "vi" ? "Nguyễn Văn Ngọc Quý — Security Engineering" : "Nguyen Van Ngoc Quy — Security Engineering",
    about: lang === "vi" ? "Giới thiệu — Nguyễn Văn Ngọc Quý" : "About — Nguyen Van Ngoc Quy",
    projects: lang === "vi" ? "Dự án — Nguyễn Văn Ngọc Quý" : "Projects — Nguyen Van Ngoc Quy",
    research: lang === "vi" ? "Nghiên cứu — Nguyễn Văn Ngọc Quý" : "Research — Nguyen Van Ngoc Quy",
    contact: lang === "vi" ? "Liên hệ — Nguyễn Văn Ngọc Quý" : "Contact — Nguyen Van Ngoc Quy"
  };
  document.title = pageTitles[document.body.dataset.page] || pageTitles.home;
  localStorage.setItem("portfolio-language", lang);
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  menuToggle?.setAttribute("aria-expanded", "false");
}

toggle?.addEventListener("click", () => setLanguage(root.dataset.lang === "vi" ? "en" : "vi"));
menuToggle?.addEventListener("click", () => {
  const open = document.body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
document.querySelectorAll(".year").forEach((element) => { element.textContent = new Date().getFullYear(); });
setLanguage(localStorage.getItem("portfolio-language") || "vi");

