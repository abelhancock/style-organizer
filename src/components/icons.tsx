import * as React from 'react'

class Loading extends React.Component {
    render() {
        return(
          <svg width="40" height="16" viewBox="0 0 80 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse id="e1" cx="14" cy="14" rx="6" ry="6" fill="#18A0FB">
                  <animate attributeType="CSS" attributeName="opacity" values="0;.6;1;.6;0" dur="1s" repeatCount="indefinite"/>
              </ellipse>
              <ellipse id="e2" cx="40" cy="14" rx="6" ry="6" fill="#18A0FB">
                  <animate attributeType="CSS" attributeName="opacity" begin=".2s" values="0;.6;1;.6;0" dur="1s" repeatCount="indefinite"/>
              </ellipse>
              <ellipse id="e3" cx="66" cy="14" rx="6" ry="6" fill="#18A0FB">
                  <animate attributeType="CSS" attributeName="opacity" begin=".4s" values="0;.6;1;.6;0" dur="1s" repeatCount="indefinite"/>
              </ellipse>
          </svg>
        )
    }
    
}

class LoadingWhite extends React.Component {
  render() {
      return(
        <svg width="40" height="16" viewBox="0 0 80 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse id="e1" cx="14" cy="14" rx="6" ry="6" fill="#FFFFFF">
                <animate attributeType="CSS" attributeName="opacity" values="0;.6;1;.6;0" dur="1s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse id="e2" cx="40" cy="14" rx="6" ry="6" fill="#FFFFFF">
                <animate attributeType="CSS" attributeName="opacity" begin=".2s" values="0;.6;1;.6;0" dur="1s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse id="e3" cx="66" cy="14" rx="6" ry="6" fill="#FFFFFF">
                <animate attributeType="CSS" attributeName="opacity" begin=".4s" values="0;.6;1;.6;0" dur="1s" repeatCount="indefinite"/>
            </ellipse>
        </svg>
      )
  }
  
}

class Selection extends React.Component{
    render() {
        return(
            <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.17647 4.82377L5.05882 6.70613L8.82353 2.94141L10 4.11788L5.05882 9.05908L2 6.00024L3.17647 4.82377Z"/>
            </svg>
        )
    }
    
}

class Perfect extends React.Component{
    render() {
        return(
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="16" height="16" rx="8" fill="#1BC47D"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M12.9142 5.41421L6.70711 11.6213L3 7.91421L4.41421 6.5L6.70711 8.79289L11.5 4L12.9142 5.41421Z" fill="white"/>
            </svg>
        )
    }
    
}

class Illustration extends React.Component{
    render() {
        return(
<svg width="260" height="200" viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H260V200H0V0Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M121.869 142.5C121.869 140.567 123.436 139 125.369 139H170.197C172.406 139 174.197 140.791 174.197 143C174.197 145.209 175.988 147 178.197 147H188.251C190.258 147 191.885 148.627 191.885 150.634C191.885 152.641 190.258 154.268 188.251 154.268H176.563C175.256 154.268 174.197 155.327 174.197 156.634C174.197 157.941 175.256 159 176.563 159H184H194.322C195.928 159 197.229 160.302 197.229 161.907C197.229 163.513 195.928 164.814 194.322 164.814H188.593C186.056 164.814 184 166.871 184 169.407C184 171.944 181.944 174 179.407 174H134H117H115.383C113.451 174 111.885 175.566 111.885 177.497C111.885 179.429 110.319 180.995 108.388 180.995H80.9973C78.7896 180.995 77 179.205 77 176.997V176.5C77 174.567 78.567 173 80.5 173H80.7705C82.5541 173 84 171.554 84 169.77C84 167.987 82.5541 166.541 80.7705 166.541H69.2705C67.4642 166.541 66 165.077 66 163.27C66 161.464 67.4642 160 69.2705 160H81C82.6569 160 84 158.657 84 157C84 155.343 82.6569 154 81 154H76C73.7909 154 72 152.209 72 150C72 147.791 73.7909 146 76 146H84H107H118.369C120.302 146 121.869 144.433 121.869 142.5ZM156.885 182.997C156.885 180.79 155.096 179 152.888 179H125.997C123.79 179 122 180.79 122 182.997C122 185.205 123.79 186.995 125.997 186.995H152.888C155.096 186.995 156.885 185.205 156.885 182.997Z" fill="#51B6FF" fillOpacity="0.14"/>
<g filter="url(#filter0_d)">
<path d="M85.1004 113.526C84.7824 111.129 86.6476 109 89.0657 109H163.621C165.782 109 167.553 110.717 167.619 112.878L168.874 153.878C168.943 156.134 167.133 158 164.876 158H94.5044C92.4986 158 90.8029 156.514 90.5392 154.526L85.1004 113.526Z" fill="url(#paint0_linear)"/>
</g>
<g filter="url(#filter1_d)">
<rect x="90" y="18.9283" width="23" height="101" rx="4" transform="rotate(-12.3729 90 18.9283)" fill="#FFF9E9"/>
</g>
<g filter="url(#filter2_d)">
<circle cx="103.911" cy="28.6738" r="7.5" transform="rotate(-12.3729 103.911 28.6738)" fill="white"/>
</g>
<circle cx="103.911" cy="28.6738" r="6.5" transform="rotate(-12.3729 103.911 28.6738)" fill="black" fillOpacity="0.8"/>
<g filter="url(#filter3_d)">
<circle cx="107.768" cy="46.2557" r="7.5" transform="rotate(-12.3729 107.768 46.2557)" fill="white"/>
</g>
<circle cx="107.768" cy="46.2557" r="6.5" transform="rotate(-12.3729 107.768 46.2557)" fill="black" fillOpacity="0.3"/>
<g filter="url(#filter4_d)">
<circle cx="111.625" cy="63.8378" r="7.5" transform="rotate(-12.3729 111.625 63.8378)" fill="white"/>
</g>
<circle cx="111.625" cy="63.8377" r="6.5" transform="rotate(-12.3729 111.625 63.8377)" fill="#E5E5E5"/>
<g filter="url(#filter5_d)">
<rect x="125" y="52" width="41" height="101" rx="4" fill="white"/>
</g>
<path d="M129.92 71L130.944 68.1165H135.061L136.085 71H137.377L133.639 60.8182H132.366L128.627 71H129.92ZM131.332 67.0227L132.963 62.429H133.042L134.673 67.0227H131.332Z" fill="black"/>
<path d="M141.746 71L142.587 68.4893H146.415L147.26 71H149.229L145.639 60.8182H143.362L139.778 71H141.746ZM143.084 67.0078L144.461 62.9062H144.54L145.918 67.0078H143.084Z" fill="black"/>
<path d="M154.73 71L155.316 69.0511H158.677L159.264 71H162.247L158.886 60.8182H155.108L151.747 71H154.73ZM155.943 66.983L156.957 63.6222H157.037L158.051 66.983H155.943Z" fill="black"/>
<path d="M158.73 76.0146L162.367 87H160.269L159.462 84.4775H155.524L154.725 87H152.619L156.229 76.0146H158.73ZM155.805 83.4727H159.188L157.521 78.2158L155.805 83.4727Z" fill="black"/>
<path d="M159.591 91.354L159.605 91.494C159.605 91.8767 159.545 92.2033 159.423 92.474C159.302 92.5673 159.111 92.642 158.849 92.698L161.187 99.614L162.517 99.782C162.517 100.165 162.41 100.571 162.195 101H158.793L158.667 100.23C159.059 100.081 159.316 99.9827 159.437 99.936L158.877 98.354H155.727C155.447 99.1847 155.298 99.6187 155.279 99.656L156.245 99.782C156.245 99.978 156.208 100.207 156.133 100.468C156.059 100.72 155.989 100.897 155.923 101H152.521L152.395 100.23C152.815 100.053 153.193 99.922 153.529 99.838L155.881 92.642C155.256 92.5487 154.785 92.4273 154.467 92.278C154.467 92.0073 154.509 91.7693 154.593 91.564C154.789 91.4987 155.247 91.424 155.965 91.34C156.693 91.2467 157.384 91.2 158.037 91.2C158.7 91.2 159.218 91.2513 159.591 91.354ZM157.785 95.204L157.379 93.356H157.239L156.791 95.288L156.133 97.038H158.471L157.785 95.204Z" fill="black"/>
<path d="M131.798 84.3135L131.518 87H127.997L129.747 76.0967H135.612L137.362 87H133.828L133.562 84.3135H131.798ZM131.976 83.0898H133.384L132.673 77.6963L131.976 83.0898Z" fill="black"/>
<path d="M130.579 91.494C130.747 91.438 131.205 91.3773 131.951 91.312C132.698 91.2373 133.375 91.2 133.981 91.2C134.597 91.2 135.073 91.228 135.409 91.284C135.419 91.3213 135.423 91.368 135.423 91.424C135.423 91.4707 135.395 91.5873 135.339 91.774C135.293 91.9607 135.255 92.082 135.227 92.138C135.153 92.2127 134.943 92.2687 134.597 92.306L137.271 100.048L138.601 100.16C138.601 100.421 138.522 100.701 138.363 101H135.143L135.101 100.51C135.316 100.398 135.629 100.3 136.039 100.216L135.325 98.214H131.419L130.761 100.048L131.895 100.16C131.895 100.421 131.816 100.701 131.657 101H128.437L128.395 100.51C128.759 100.379 129.147 100.277 129.557 100.202L132.273 92.264C131.443 92.1707 130.859 92.0587 130.523 91.928L130.579 91.494ZM134.219 95.092L133.477 92.348C133.421 92.3387 133.342 92.334 133.239 92.334L132.483 95.19L131.671 97.318H135.073L134.219 95.092Z" fill="black"/>
<path d="M143.848 78.642L142.308 82.716H145.388L143.848 78.642ZM139.298 86.804H140.53L144.31 76.78H144.646L148.454 86.804H149.7V87H145.388V86.804H146.942L145.472 82.912H142.224L140.754 86.804H142.308V87H139.298V86.804Z" fill="black"/>
<path d="M146.591 91.354L146.605 91.494C146.605 91.8767 146.545 92.2033 146.423 92.474C146.302 92.5673 146.111 92.642 145.849 92.698L148.187 99.614L149.517 99.782C149.517 100.165 149.41 100.571 149.195 101H145.793L145.667 100.23C146.059 100.081 146.316 99.9827 146.437 99.936L145.877 98.354H142.727C142.447 99.1847 142.298 99.6187 142.279 99.656L143.245 99.782C143.245 99.978 143.208 100.207 143.133 100.468C143.059 100.72 142.989 100.897 142.923 101H139.521L139.395 100.23C139.815 100.053 140.193 99.922 140.529 99.838L142.881 92.642C142.256 92.5487 141.785 92.4273 141.467 92.278C141.467 92.0073 141.509 91.7693 141.593 91.564C141.789 91.4987 142.247 91.424 142.965 91.34C143.693 91.2467 144.384 91.2 145.037 91.2C145.7 91.2 146.218 91.2513 146.591 91.354ZM144.785 95.204L144.379 93.356H144.239L143.791 95.288L143.133 97.038H145.471L144.785 95.204Z" fill="black"/>
<g filter="url(#filter6_d)">
<rect x="190.418" y="54" width="28" height="101" rx="4" transform="rotate(45 190.418 54)" fill="#EBEBEB"/>
</g>
<g filter="url(#filter7_dd)">
<rect x="189.711" y="63.1924" width="16" height="6" rx="2" transform="rotate(45 189.711 63.1924)" fill="white"/>
</g>
<g filter="url(#filter8_dd)">
<rect x="181.225" y="71.6776" width="16" height="6" rx="2" transform="rotate(45 181.225 71.6776)" fill="white"/>
</g>
<g filter="url(#filter9_dd)">
<rect x="172.033" y="80.8701" width="16" height="6" rx="2" transform="rotate(45 172.033 80.8701)" fill="white"/>
</g>
<g filter="url(#filter10_dd)">
<rect x="162.133" y="90.7695" width="16" height="6" rx="2" transform="rotate(45 162.133 90.7695)" fill="white"/>
</g>
<g filter="url(#filter11_d)">
<rect x="51" y="76.6722" width="42" height="101" rx="4" transform="rotate(-43.0529 51 76.6722)" fill="#EDF5FA"/>
</g>
<g filter="url(#filter12_d)">
<rect x="56.6536" y="76.8645" width="10" height="10" rx="2" transform="rotate(-43.0529 56.6536 76.8645)" fill="white"/>
<rect x="58.067" y="76.9126" width="8" height="8" rx="1" transform="rotate(-43.0529 58.067 76.9126)" fill="#18A0FB"/>
</g>
<g filter="url(#filter13_d)">
<rect x="73.0377" y="94.4019" width="10" height="10" rx="2" transform="rotate(-43.0529 73.0377 94.4019)" fill="white"/>
<rect x="74.4512" y="94.45" width="8" height="8" rx="1" transform="rotate(-43.0529 74.4512 94.45)" fill="#1BC47D"/>
</g>
<g filter="url(#filter14_d)">
<rect x="64.8456" y="85.6332" width="10" height="10" rx="2" transform="rotate(-43.0529 64.8456 85.6332)" fill="white"/>
<rect x="66.259" y="85.6813" width="8" height="8" rx="1" transform="rotate(-43.0529 66.259 85.6813)" fill="#1891FB" fillOpacity="0.3"/>
</g>
<g filter="url(#filter15_d)">
<rect x="81.2297" y="103.171" width="10" height="10" rx="2" transform="rotate(-43.0529 81.2297 103.171)" fill="white"/>
<rect x="82.6432" y="103.219" width="8" height="8" rx="1" transform="rotate(-43.0529 82.6432 103.219)" fill="#00B5CE"/>
</g>
<g filter="url(#filter16_d)">
<rect x="65.4222" y="68.6725" width="10" height="10" rx="2" transform="rotate(-43.0529 65.4222 68.6725)" fill="white"/>
<rect x="66.8357" y="68.7206" width="8" height="8" rx="1" transform="rotate(-43.0529 66.8357 68.7206)" fill="#7B61FF"/>
</g>
<g filter="url(#filter17_d)">
<rect x="82.3831" y="69.249" width="10" height="10" rx="2" transform="rotate(-43.0529 82.3831 69.249)" fill="white"/>
<rect x="83.7965" y="69.2971" width="8" height="8" rx="1" transform="rotate(-43.0529 83.7965 69.2971)" fill="#F24822"/>
</g>
<g filter="url(#filter18_d)">
<rect x="73.6144" y="77.4412" width="10" height="10" rx="2" transform="rotate(-43.0529 73.6144 77.4412)" fill="white"/>
<rect x="75.0278" y="77.4893" width="8" height="8" rx="1" transform="rotate(-43.0529 75.0278 77.4893)" fill="#7B61FF" fillOpacity="0.4"/>
</g>
<g filter="url(#filter19_d)">
<rect x="89.9985" y="94.9785" width="10" height="10" rx="2" transform="rotate(-43.0529 89.9985 94.9785)" fill="white"/>
<rect x="91.412" y="95.0266" width="8" height="8" rx="1" transform="rotate(-43.0529 91.412 95.0266)" fill="#71498A"/>
</g>
<g filter="url(#filter20_d)">
<rect x="74.1909" y="60.4803" width="10" height="10" rx="2" transform="rotate(-43.0529 74.1909 60.4803)" fill="white"/>
<rect x="75.6044" y="60.5284" width="8" height="8" rx="1" transform="rotate(-43.0529 75.6044 60.5284)" fill="#FF00FF"/>
</g>
<g filter="url(#filter21_d)">
<rect x="81.8064" y="86.2098" width="10" height="10" rx="2" transform="rotate(-43.0529 81.8064 86.2098)" fill="white"/>
<rect x="83.2198" y="86.2579" width="8" height="8" rx="1" transform="rotate(-43.0529 83.2198 86.2579)" fill="#FFEB00"/>
</g>
<g filter="url(#filter22_d)">
<rect x="90.5751" y="78.0177" width="10" height="10" rx="2" transform="rotate(-43.0529 90.5751 78.0177)" fill="white"/>
<rect x="91.9885" y="78.0658" width="8" height="8" rx="1" transform="rotate(-43.0529 91.9885 78.0658)" fill="#FF7A00"/>
</g>
<g filter="url(#filter23_d)">
<rect x="98.7672" y="86.7864" width="10" height="10" rx="2" transform="rotate(-43.0529 98.7672 86.7864)" fill="white"/>
<rect x="100.181" y="86.8345" width="8" height="8" rx="1" transform="rotate(-43.0529 100.181 86.8345)" fill="#781F0B"/>
</g>
<g filter="url(#filter24_d)">
<path fillRule="evenodd" clipRule="evenodd" d="M91 105.626C91 104.583 91.4071 103.582 92.1346 102.835L96.6406 98.2089C97.3935 97.4359 98.4268 96.9999 99.5059 96.9999H121.343C122.404 96.9999 123.421 97.4213 124.172 98.1714L128.828 102.828C129.579 103.578 130.596 104 131.657 104H167C169.209 104 171 105.791 171 108V156C171 158.209 169.209 160 167 160H95C92.7909 160 91 158.209 91 156V105.626Z" fill="#9CDBFF"/>
<rect x="91" y="104" width="80" height="56" rx="4" fill="url(#paint1_linear)"/>
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="91" y="103" width="80" height="57">
<rect x="91" y="104" width="80" height="56" rx="4" fill="url(#paint2_linear)"/>
</mask>
<g mask="url(#mask0)">
<ellipse cx="156.055" cy="183.75" rx="83.5187" ry="63.7454" transform="rotate(-33.4947 156.055 183.75)" fill="url(#paint3_radial)"/>
</g>
</g>
<defs>
<filter id="filter0_d" x="65.0649" y="89" width="123.811" height="89" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="10"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.0945 0 0 0 0 0.3375 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter1_d" x="86" y="10" width="52.1074" height="111.582" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter2_d" x="94.4098" y="19.1722" width="19.0032" height="19.0032" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter3_d" x="98.2666" y="36.7542" width="19.0032" height="19.0032" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter4_d" x="102.124" y="54.3362" width="19.0032" height="19.0032" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter5_d" x="121" y="48" width="49" height="109" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter6_d" x="115" y="50" width="99.2168" height="99.2168" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter7_dd" x="180.296" y="58.0208" width="25.8995" height="25.8995" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dx="-2" dy="-2"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dx="2" dy="2"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
<filter id="filter8_dd" x="171.811" y="66.506" width="25.8995" height="25.8995" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dx="-2" dy="-2"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dx="2" dy="2"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0.59 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
<filter id="filter9_dd" x="162.619" y="75.6985" width="25.8995" height="25.8995" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dx="-2" dy="-2"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dx="2" dy="2"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.0999999 0 0 0 0.59 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
<filter id="filter10_dd" x="152.719" y="85.5979" width="25.8995" height="25.8995" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dx="-2" dy="-2"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dx="2" dy="2"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.10725 0 0 0 0 0.4875 0 0 0 0.59 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
<filter id="filter11_d" x="47" y="44" width="107.64" height="110.475" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter12_d" x="54.6536" y="68.0377" width="18.134" height="18.134" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter13_d" x="71.0377" y="85.5751" width="18.134" height="18.134" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter14_d" x="62.8456" y="76.8064" width="18.134" height="18.134" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter15_d" x="79.2297" y="94.3438" width="18.134" height="18.134" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter16_d" x="63.4222" y="59.8457" width="18.134" height="18.134" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter17_d" x="80.3831" y="60.4222" width="18.134" height="18.134" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter18_d" x="71.6144" y="68.6144" width="18.134" height="18.134" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter19_d" x="87.9985" y="86.1517" width="18.134" height="18.134" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter20_d" x="72.1909" y="51.6536" width="18.134" height="18.134" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter21_d" x="79.8064" y="77.3831" width="18.134" height="18.134" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter22_d" x="88.5751" y="69.1909" width="18.134" height="18.134" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter23_d" x="96.7672" y="77.9596" width="18.134" height="18.134" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter24_d" x="87" y="92.9999" width="88" height="71" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.218833 0 0 0 0 0.420833 0 0 0 0.27 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<linearGradient id="paint0_linear" x1="129" y1="102" x2="129" y2="158" gradientUnits="userSpaceOnUse">
<stop stopColor="#1D8EDA"/>
<stop offset="1" stopColor="#9FD9FF"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="131" y1="104" x2="166" y2="156.5" gradientUnits="userSpaceOnUse">
<stop stopColor="#5BBDFF"/>
<stop offset="1" stopColor="#A9DCFF"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="131" y1="104" x2="131" y2="160" gradientUnits="userSpaceOnUse">
<stop offset="0.046875" stopColor="#18A0FB"/>
<stop offset="1" stopColor="#56BBFF"/>
</linearGradient>
<radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(210.425 144.32) rotate(12.704) scale(113.651 181.364)">
<stop stopColor="white" stopOpacity="0"/>
<stop offset="1" stopColor="white" stopOpacity="0.26"/>
</radialGradient>
</defs>
</svg>
        )
    }   
}

class Chessbox extends React.Component {
    render() {
        return(
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0)">
<rect width="16" height="16" rx="2" fill="white"/>
<rect x="14" y="-1" width="3" height="3" fill="#E1E1E1"/>
<rect x="14" y="5" width="3" height="3" fill="#E1E1E1"/>
<rect x="14" y="11" width="3" height="3" fill="#E1E1E1"/>
<rect x="11" y="2" width="3" height="3" fill="#E1E1E1"/>
<rect x="11" y="8" width="3" height="3" fill="#E1E1E1"/>
<rect x="11" y="14" width="3" height="3" fill="#E1E1E1"/>
<rect x="8" y="-1" width="3" height="3" fill="#E1E1E1"/>
<rect x="8" y="5" width="3" height="3" fill="#E1E1E1"/>
<rect x="8" y="11" width="3" height="3" fill="#E1E1E1"/>
<rect x="5" y="2" width="3" height="3" fill="#E1E1E1"/>
<rect x="5" y="8" width="3" height="3" fill="#E1E1E1"/>
<rect x="5" y="14" width="3" height="3" fill="#E1E1E1"/>
<rect x="2" y="-1" width="3" height="3" fill="#E1E1E1"/>
<rect x="2" y="5" width="3" height="3" fill="#E1E1E1"/>
<rect x="2" y="11" width="3" height="3" fill="#E1E1E1"/>
<rect x="-1" y="2" width="3" height="3" fill="#E1E1E1"/>
<rect x="-1" y="8" width="3" height="3" fill="#E1E1E1"/>
<rect x="-1" y="14" width="3" height="3" fill="#E1E1E1"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="16" height="16" rx="2" fill="white"/>
</clipPath>
</defs>
</svg>
        )
    }
    
  }
  
export {
  Loading,
  LoadingWhite,
  Selection,
  Perfect,
  Illustration,
  Chessbox
}