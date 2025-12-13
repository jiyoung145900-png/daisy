function updateTime() {
    const now = new Date();
    
    // 현재 시간: 시, 분, 초를 두 자리로 맞춥니다 (예: 09:05:01)
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // HTML 요소에 시간 표시
    document.getElementById('current-time').textContent = timeString;
}

// 1000밀리초 (1초)마다 시간을 업데이트하도록 설정
setInterval(updateTime, 1000);

// 페이지 로드 시 즉시 시간 업데이트 함수 호출
updateTime();
