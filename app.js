const translations = {
  vi: {
    skip: "Bỏ qua điều hướng", navLabel: "Điều hướng chính", navProfile: "Hồ sơ", navWork: "Dự án", navResearch: "Nghiên cứu", navContact: "Liên hệ",
    heroLead: "Biến tín hiệu bảo mật thành", heroEmphasis: "bằng chứng có thể hành động.",
    heroIntro: "Tôi là Nguyễn Văn Ngọc Quý, Junior Security Engineer tập trung vào vận hành SOC, điều tra số, phân tích mã độc và tự động hóa quy trình phát hiện—ứng phó.",
    viewWork: "Xem dự án", profileSummary: "Tóm tắt hồ sơ", fieldNote: "Hồ sơ nghiên cứu / 01", active: "Đang hoạt động", target: "Mục tiêu", education: "Đào tạo", academyShort: "Học viện Kỹ thuật Mật mã", location: "Địa điểm", overviewLabel: "Tổng quan năng lực",
    metricNotes: "trang ghi chú kỹ thuật", metricDomains: "mảng chuyên môn trọng tâm", metricExperience: "kinh nghiệm SOC thực tế", metricLanguage: "hồ sơ song ngữ",
    profileTitle: "Kỹ thuật bảo mật dựa trên bằng chứng", profileP1: "Tôi tiếp cận sự cố như một bài toán hệ thống: chuẩn hóa dữ liệu, giữ nguyên ngữ cảnh, xây dựng giả thuyết có thể kiểm chứng và biến kết quả điều tra thành quy trình lặp lại được.", profileP2: "Mối quan tâm hiện tại nằm ở giao điểm giữa detection engineering, DFIR và AI hỗ trợ SOC—nơi tự động hóa phải tăng tốc phân tích mà không che khuất bằng chứng hay quyền kiểm soát của analyst.",
    principle1Title: "Tín hiệu có ngữ cảnh", principle1Text: "Chuẩn hóa alert, thực thể và observable trước khi correlation.", principle2Title: "Điều tra có thể tái lập", principle2Text: "Ưu tiên timeline, provenance và kết luận gắn với bằng chứng.", principle3Title: "Tự động hóa có kiểm soát", principle3Text: "Đưa analyst vào vòng phê duyệt với audit trail rõ ràng.",
    workTitle: "Dự án chọn lọc", workIntro: "Các dự án dưới đây được chọn từ GitHub theo mức độ liên quan tới bảo mật và mức độ sở hữu kỹ thuật.", flagship: "Đồ án trọng điểm · Đang phát triển", agenticSummary: "Hệ thống tích hợp ELK, Shuffle SOAR, Redis, TheHive và các AI agent chuyên trách để chuẩn hóa alert, correlation, enrichment, threat hunting và tạo hồ sơ sự cố có cấu trúc.", agenticPoint1: "Thiết kế pipeline hai tầng: tiền xử lý alert và incident playbook.", agenticPoint2: "Xây dựng correlation keys theo rule, phạm vi group-by và cửa sổ thời gian.", agenticPoint3: "Tách vai trò Planner, Hunter, Assessment và Summary với human approval.", inspectRepo: "Xem repository", architectureLabel: "Sơ đồ pipeline dự án", archDetect: "Phát hiện", archOrchestrate: "Điều phối", archAnalyze: "Phân tích", archCase: "Hồ sơ sự cố",
    certSummary: "Ứng dụng Windows minh họa mã hóa, giải mã, ký số và xác minh tài liệu bằng chứng thư số, hỗ trợ các định dạng .cer, .crt, .pfx và .p12.", web3Summary: "DApp học tập chạy trên mạng cục bộ, triển khai smart contract nạp/rút test ETH với Hardhat, Ganache, MetaMask và ethers v6.",
    researchTitle: "Nghiên cứu và thực hành", researchIntro: "Tổng hợp từ hệ thống ghi chú cá nhân, bài lab và write-up. Nội dung chi tiết được giữ riêng để tránh công khai lời giải và dữ liệu nhạy cảm.", domainDetection: "Sigma, MITRE ATT&CK, alert normalization, deduplication, correlation và SIEM engineering.", domainDfir: "Windows/Linux forensics, memory, disk, network traffic và xây dựng timeline sự cố.", domainMalware: "Phân tích tĩnh/động, x86/x64, ARM, anti-analysis, Ghidra và Volatility.", domainWeb: "PortSwigger labs, web attack simulation, API testing và xác thực security controls.",
    casebookLabel: "Selected casebook / ghi chú riêng", casebookTitle: "Ba bài điều tra tiêu biểu", case1: "Linux live response · volatile artifacts · deleted storage", case2: "Memory & disk forensics · injection · ransomware trail", case3: "Large-scale PCAP · web traffic · token and signature anomalies", casebookNote: "Write-up đầy đủ có thể được trao đổi trong buổi phỏng vấn khi phù hợp.",
    timelineTitle: "Kinh nghiệm và đào tạo", present: "Hiện tại", experience: "Kinh nghiệm", vsecSummary: "Giám sát và điều tra cảnh báo; phân tích mã độc, threat hunting và forensic trên Windows/Linux; mô phỏng tấn công web để đánh giá security controls; làm việc với SIEM, SOAR và XDR.", academy: "Học viện Kỹ thuật Mật mã", degree: "Kỹ sư An toàn thông tin · GPA 3.19 / 4.0 · Dự kiến tốt nghiệp 01/2027.", continuous: "Liên tục", practice: "Thực hành chuyên môn", practiceSummary: "Tập trung vào Reverse Engineering, Digital Forensics, web security labs và các tình huống điều tra Sherlocks.",
    toolkitTitle: "Công cụ và nền tảng", platforms: "Nền tảng", forensics: "Điều tra", offensive: "Kiểm thử", languages: "Ngôn ngữ",
    contactTitle: "Cùng xây dựng hệ thống phòng thủ tốt hơn.", contactText: "Tôi quan tâm tới các vị trí Junior Security Engineer, SOC và DFIR, nơi phân tích kỹ thuật đi cùng quy trình rõ ràng và tinh thần học hỏi nghiêm túc.", footer: "Thiết kế như một hồ sơ nghiên cứu bảo mật.", backTop: "Lên đầu trang"
  },
  en: {
    skip: "Skip to content", navLabel: "Primary navigation", navProfile: "Profile", navWork: "Work", navResearch: "Research", navContact: "Contact",
    heroLead: "Turning security signals into", heroEmphasis: "evidence you can act on.",
    heroIntro: "I’m Nguyen Van Ngoc Quy, a Junior Security Engineer focused on SOC operations, digital forensics, malware analysis, and detection-and-response automation.",
    viewWork: "View selected work", profileSummary: "Profile summary", fieldNote: "Research dossier / 01", active: "Active", target: "Target", education: "Education", academyShort: "Academy of Cryptography Techniques", location: "Location", overviewLabel: "Capability overview",
    metricNotes: "pages of technical notes", metricDomains: "core practice domains", metricExperience: "hands-on SOC experience", metricLanguage: "bilingual portfolio",
    profileTitle: "Evidence-driven security engineering", profileP1: "I approach incidents as systems problems: normalize the data, preserve context, form testable hypotheses, and turn investigation results into repeatable workflows.", profileP2: "My current interests sit at the intersection of detection engineering, DFIR, and AI-assisted SOC—where automation should accelerate analysis without obscuring evidence or analyst control.",
    principle1Title: "Context-rich signals", principle1Text: "Normalize alerts, entities, and observables before correlation.", principle2Title: "Reproducible investigation", principle2Text: "Prioritize timelines, provenance, and evidence-linked conclusions.", principle3Title: "Controlled automation", principle3Text: "Keep analysts in the approval loop with a clear audit trail.",
    workTitle: "Selected work", workIntro: "Projects selected from GitHub for their security relevance and clear technical ownership.", flagship: "Flagship project · In progress", agenticSummary: "A system integrating ELK, Shuffle SOAR, Redis, TheHive, and specialized AI agents for alert normalization, correlation, enrichment, threat hunting, and structured incident case creation.", agenticPoint1: "Designed a two-stage pipeline: alert preprocessing and incident playbooks.", agenticPoint2: "Built correlation keys around rules, group-by scope, and time windows.", agenticPoint3: "Separated Planner, Hunter, Assessment, and Summary roles with human approval.", inspectRepo: "Inspect repository", architectureLabel: "Project pipeline diagram", archDetect: "Detect", archOrchestrate: "Orchestrate", archAnalyze: "Analyze", archCase: "Incident case",
    certSummary: "A Windows application demonstrating document encryption, decryption, digital signing, and verification with certificates in .cer, .crt, .pfx, and .p12 formats.", web3Summary: "A local learning dApp implementing test-ETH deposit and withdrawal through Solidity, Hardhat, Ganache, MetaMask, React, and ethers v6.",
    researchTitle: "Research and practice", researchIntro: "Synthesized from a private knowledge base, hands-on labs, and write-ups. Full technical notes remain private to avoid exposing solutions and sensitive material.", domainDetection: "Sigma, MITRE ATT&CK, alert normalization, deduplication, correlation, and SIEM engineering.", domainDfir: "Windows/Linux forensics, memory, disk, network traffic, and incident timeline construction.", domainMalware: "Static and dynamic analysis, x86/x64, ARM, anti-analysis, Ghidra, and Volatility.", domainWeb: "PortSwigger labs, web attack simulation, API testing, and security-control validation.",
    casebookLabel: "Selected casebook / private notes", casebookTitle: "Three representative investigations", case1: "Linux live response · volatile artifacts · deleted storage", case2: "Memory & disk forensics · injection · ransomware trail", case3: "Large-scale PCAP · web traffic · token and signature anomalies", casebookNote: "Full write-ups can be discussed in an interview when appropriate.",
    timelineTitle: "Experience and education", present: "Present", experience: "Experience", vsecSummary: "Monitor and investigate alerts; perform malware analysis, threat hunting, and Windows/Linux forensics; simulate web attacks to validate security controls; work across SIEM, SOAR, and XDR.", academy: "Academy of Cryptography Techniques", degree: "B.Eng. in Cyber Security · GPA 3.19 / 4.0 · Expected January 2027.", continuous: "Ongoing", practice: "Professional practice", practiceSummary: "Focused practice in Reverse Engineering, Digital Forensics, web security labs, and Hack The Box Sherlock investigations.",
    toolkitTitle: "Tools and platforms", platforms: "Platforms", forensics: "Forensics", offensive: "Testing", languages: "Languages",
    contactTitle: "Let’s build stronger defenses.", contactText: "I’m interested in Junior Security Engineer, SOC, and DFIR roles where technical analysis is matched by clear process and disciplined learning.", footer: "Designed as a security research dossier.", backTop: "Back to top"
  }
};

const root = document.documentElement;
const toggle = document.querySelector(".language-toggle");
const languageSpans = toggle.querySelectorAll("span");

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

  languageSpans[0].classList.toggle("language-active", lang === "vi");
  languageSpans[2].classList.toggle("language-active", lang === "en");
  toggle.setAttribute("aria-pressed", String(lang === "en"));
  toggle.setAttribute("aria-label", lang === "vi" ? "Switch to English" : "Chuyển sang tiếng Việt");
  document.title = lang === "vi"
    ? "Nguyễn Văn Ngọc Quý — Security Engineering Portfolio"
    : "Nguyen Van Ngoc Quy — Security Engineering Portfolio";
  localStorage.setItem("portfolio-language", lang);
}

toggle.addEventListener("click", () => setLanguage(root.dataset.lang === "vi" ? "en" : "vi"));

const observer = "IntersectionObserver" in window
  ? new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 })
  : null;

document.querySelectorAll(".reveal").forEach((element) => {
  if (observer) observer.observe(element);
  else element.classList.add("is-visible");
});

document.getElementById("year").textContent = new Date().getFullYear();
setLanguage(localStorage.getItem("portfolio-language") || "vi");

