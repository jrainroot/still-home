/**
 * ISO 문자열을 'YYYY-MM-DD HH:mm' 형식으로 변환
 * @param isoString ISO 형식의 날짜 문자열
 * @returns 'YYYY-MM-DD HH:mm' 형식의 문자열
 */
export const formatDate = (isoString: string): string => {
  const date = new Date(isoString.slice(0, 23));
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const mi = String(date.getMinutes()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd} ${hh}:${mi}`;
};

/**
 * ISO 문자열을 'YYYY년 MM월 DD일' 형식으로 변환
 * @param isoString ISO 형식의 날짜 문자열
 * @returns 'YYYY년 MM월 DD일' 형식의 문자열
 */
export const formatKoreanDate = (isoString: string): string => {
  const date = new Date(isoString.slice(0, 23));
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}년 ${mm}월 ${dd}일`;
};

/**
 * ISO 문자열을 'HH:mm' 형식으로 변환
 * @param isoString ISO 형식의 날짜 문자열
 * @returns 'HH:mm' 형식의 문자열
 */
export const formatTime = (isoString: string): string => {
  const date = new Date(isoString.slice(0, 23));
  const hh = String(date.getHours()).padStart(2, "0");
  const mi = String(date.getMinutes()).padStart(2, "0");
  return `${hh}:${mi}`;
};
