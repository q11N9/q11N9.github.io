const translations = {
  vi: {
    skip: "Bỏ qua điều hướng", navLabel: "Điều hướng chính", navAbout: "Giới thiệu", navProjects: "Dự án", navResearch: "Nghiên cứu", navExperience: "Kinh nghiệm",
    profileLabel: "Tóm tắt hồ sơ", avatarLabel: "Ảnh đại diện tạm thời", profileLead: "Junior Security Engineer. Ở giữa tín hiệu, bằng chứng và phản ứng.", location: "Hà Nội, Việt Nam", academyShort: "Học viện Kỹ thuật Mật mã", selectedWork: "Dự án chọn lọc", availability: "Quan tâm các vị trí Security Engineering, SOC và DFIR",
    introTitle: "Điều tra kỹ. Tự động hóa có kiểm soát.", introCopy: "Tôi xây dựng năng lực ở giao điểm giữa vận hành SOC, điều tra số, phân tích mã độc và detection engineering. Mục tiêu của tôi là biến dữ liệu rời rạc thành kết luận có thể kiểm chứng và quy trình có thể lặp lại.", notesMetric: "trang ghi chú kỹ thuật", socMetric: "bắt đầu kinh nghiệm SOC", gradMetric: "dự kiến tốt nghiệp",
    projectsTitle: "Dự án chọn lọc", ongoing: "Đang phát triển", publicLab: "Dự án lab công khai", learningProject: "Dự án học tập", openRepository: "Mở repository",
    agenticText: "Hệ thống tích hợp ELK, Shuffle SOAR, Redis, TheHive và các AI agent chuyên trách. Pipeline xử lý alert theo hai tầng: chuẩn hóa, deduplication, correlation và enrichment trước khi chuyển sang incident playbook có analyst phê duyệt.",
    certText: "Ứng dụng Windows minh họa mã hóa, giải mã, ký số và xác minh tài liệu bằng chứng thư số; hỗ trợ .cer, .crt, .pfx và .p12.", web3Text: "DApp chạy trên mạng cục bộ, triển khai smart contract nạp/rút test ETH bằng Solidity, Hardhat, Ganache, MetaMask, React và ethers v6.",
    researchTitle: "Research log", note1Title: "Từ alert rời rạc tới incident có ngữ cảnh", note1Text: "Alert normalization, Sigma correlation, Redis keys, deduplication, entity extraction và case routing.", note2Text: "Live-response artifacts, bằng chứng volatile và phần dữ liệu phục hồi từ deleted storage.", note3Text: "Memory/disk forensics, process injection, DPAPI và chuỗi dấu vết ransomware.", note4Text: "Lọc traffic quy mô lớn và truy tìm bất thường trong token, cookie, signature và HTTP metadata.", privacyNote: "Các write-up đầy đủ được giữ riêng để không công khai lời giải hoặc dữ liệu nhạy cảm; có thể trao đổi trong phỏng vấn khi phù hợp.",
    experienceTitle: "Kinh nghiệm & đào tạo", present: "Hiện tại", vsecText: "Giám sát và điều tra cảnh báo; malware analysis, threat hunting và forensic trên Windows/Linux; mô phỏng tấn công web để đánh giá security controls; làm việc với SIEM, SOAR và XDR.", academy: "Học viện Kỹ thuật Mật mã", degree: "Kỹ sư An toàn thông tin · GPA 3.19 / 4.0 · Dự kiến tốt nghiệp 01/2027.", ongoingTime: "Liên tục", practiceText: "Thực hành Reverse Engineering, Digital Forensics, web security labs và các tình huống điều tra Sherlocks.",
    toolkitTitle: "Toolkit", platforms: "Nền tảng", testing: "Kiểm thử", languages: "Ngôn ngữ", contactTitle: "Trao đổi về Security Engineering.", contactText: "Nếu bạn đang tìm một Junior Security Engineer có nền tảng SOC, DFIR và thói quen nghiên cứu có hệ thống, hãy liên hệ với tôi.", backTop: "Lên đầu trang"
  },
  en: {
    skip: "Skip to content", navLabel: "Primary navigation", navAbout: "About", navProjects: "Projects", navResearch: "Research", navExperience: "Experience",
    profileLabel: "Profile summary", avatarLabel: "Temporary profile image", profileLead: "Junior Security Engineer. Somewhere between signal, evidence, and response.", location: "Hanoi, Vietnam", academyShort: "Academy of Cryptography Techniques", selectedWork: "Selected work", availability: "Interested in Security Engineering, SOC, and DFIR roles",
    introTitle: "Investigate deeply. Automate responsibly.", introCopy: "I build at the intersection of SOC operations, digital forensics, malware analysis, and detection engineering. My goal is to turn fragmented data into testable conclusions and repeatable workflows.", notesMetric: "pages of technical notes", socMetric: "SOC experience started", gradMetric: "expected graduation",
    projectsTitle: "Selected projects", ongoing: "In progress", publicLab: "Public lab project", learningProject: "Learning project", openRepository: "Open repository",
    agenticText: "A system integrating ELK, Shuffle SOAR, Redis, TheHive, and specialized AI agents. Its two-stage pipeline normalizes, deduplicates, correlates, and enriches alerts before routing them into analyst-approved incident playbooks.",
    certText: "A Windows application demonstrating document encryption, decryption, digital signing, and verification with certificates in .cer, .crt, .pfx, and .p12 formats.", web3Text: "A local dApp implementing test-ETH deposits and withdrawals with Solidity, Hardhat, Ganache, MetaMask, React, and ethers v6.",
    researchTitle: "Research log", note1Title: "From isolated alerts to context-rich incidents", note1Text: "Alert normalization, Sigma correlation, Redis keys, deduplication, entity extraction, and case routing.", note2Text: "Live-response artifacts, volatile evidence, and remnants recovered from deleted storage.", note3Text: "Memory and disk forensics, process injection, DPAPI, and a ransomware evidence trail.", note4Text: "Filtering large-scale traffic and tracing anomalies in tokens, cookies, signatures, and HTTP metadata.", privacyNote: "Full write-ups remain private to avoid exposing solutions or sensitive material; they can be discussed in interviews when appropriate.",
    experienceTitle: "Experience & education", present: "Present", vsecText: "Monitor and investigate alerts; perform malware analysis, threat hunting, and Windows/Linux forensics; simulate web attacks to validate security controls; work across SIEM, SOAR, and XDR.", academy: "Academy of Cryptography Techniques", degree: "B.Eng. in Cyber Security · GPA 3.19 / 4.0 · Expected January 2027.", ongoingTime: "Ongoing", practiceText: "Hands-on work in Reverse Engineering, Digital Forensics, web security labs, and Hack The Box Sherlock investigations.",
    toolkitTitle: "Toolkit", platforms: "Platforms", testing: "Testing", languages: "Languages", contactTitle: "Let’s talk Security Engineering.", contactText: "If you are looking for a Junior Security Engineer with SOC and DFIR foundations and a disciplined research habit, I would be glad to connect.", backTop: "Back to top"
  }
};

const root = document.documentElement;
const toggle = document.querySelector(".language-toggle");
const languageLabels = toggle.querySelectorAll("span");

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

  languageLabels[0].classList.toggle("active", lang === "vi");
  languageLabels[1].classList.toggle("active", lang === "en");
  toggle.setAttribute("aria-pressed", String(lang === "en"));
  toggle.setAttribute("aria-label", lang === "vi" ? "Switch to English" : "Chuyển sang tiếng Việt");
  document.title = lang === "vi" ? "Nguyễn Văn Ngọc Quý — Security Engineering" : "Nguyen Van Ngoc Quy — Security Engineering";
  localStorage.setItem("portfolio-language", lang);
}

toggle.addEventListener("click", () => setLanguage(root.dataset.lang === "vi" ? "en" : "vi"));
document.getElementById("year").textContent = new Date().getFullYear();
setLanguage(localStorage.getItem("portfolio-language") || "vi");

