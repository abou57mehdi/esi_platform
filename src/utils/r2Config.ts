// GitHub Pages base URL for object storage
export const GITHUB_PAGES_BASE_URL = "https://abou57mehdi.github.io/objectorage";

// Helper to construct PDF URLs
export const getPdfUrl = (path: string, filename: string) => {
  return `${GITHUB_PAGES_BASE_URL}/${path}/${filename}`;
};

// Examples:
// getPdfUrl("common/S1", "MATH101-E1.pdf")
//   → https://abou57mehdi.github.io/objectorage/common/S1/MATH101-E1.pdf
//
// getPdfUrl("filieres/ISITD/S5", "TDM501-ISITD-E1.pdf")
//   → https://abou57mehdi.github.io/objectorage/filieres/ISITD/S5/TDM501-ISITD-E1.pdf