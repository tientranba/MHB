function message() {
   const message = "happy birthday",
      messageText = document.querySelectorAll(".message__text"),
      messageSplit = message.split(""),
         messageContainer = document.querySelector(".message"),
         messageBtn = document.querySelector(".message__btn"),
         reloadBtn = document.querySelector(".reload"),
         particlesContainer = document.getElementById("particles-js");
   
   const colors = ["#f7b267", "#f79d65", "#f4845f", "#f27059", "#f25c54"];
   let i = 0;
   
   messageBtn.addEventListener("click", openMessage);
   reloadBtn.addEventListener("click", openMessage);
   
   //Open Message
   function openMessage() {
    if (messageContainer.classList.contains("clicked")) {
        messageContainer.classList.remove("clicked");
        reloadBtn.style.display = "none"; // Ẩn nút reload khi đóng
        particlesContainer.classList.remove("show");
    } else {
        messageContainer.classList.add("clicked");
        setTimeout(() => {
            reloadBtn.style.display = "block"; // Hiển thị nút reload sau 35 giây
        }, 35000); // Delay 35 giây
        setTimeout(() => {
            particlesContainer.classList.add("show");
        }, 3500);
    }
}
   
   
   // Get Message ans Split Chars
   messageSplit.forEach(function (el) {
      let template = `
         <p class="message__letters">
            <span class="message__letterMain">${el}</span>
            <span class="message__letterShadow">${el}</span>
         </p>`;
   
      messageText.forEach(function (el) {
         el.insertAdjacentHTML("beforeend", template);
      });
   });
   
   
   // Add colours to Letters
   const letterMain = document.querySelectorAll(".message__letterMain");
   letterMain.forEach(function (el) {
      if(i == colors.length) i=0
       el.style.color = colors[i];
         i++;
   });
   }
   
   message();
   
   
   /// Particle JS
   
   /* ---- particles.js config ---- */
   
   particlesJS("particles-js", {
      particles: {
         number: { value: 80, density: { enable: true, value_area: 800 } },
         color: { value: ["#f7b267", "#f79d65", "#f4845f", "#f27059", "#f25c54", "#ffffff", "#cc444b", "#ff6b6b","#e63946" ] },
         shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
         },
         opacity: {
            value: 1,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
         },
         size: {
            value: 6,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
         },
         line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
         },
         move: {
            enable: true,
            speed: 6,
            direction: "top",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
         }
      },
      interactivity: {
         detect_on: "canvas",
         events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
         },
         modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 150, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
         }
      },
      retina_detect: true
   });
   

   tsParticles.load("tsparticles", {
    fullScreen: {
      enable: true
    },
    particles: {
      number: {
        value: 0
      },
      color: {
        value: ["#1e90ff", "#fffa65", "#8e44ad", "#ff4757"]
      },
      shape: {
        type: ["circle", "square"]
      },
      opacity: {
        value: {
          max: 1,
          min: 0
        },
        animation: {
          enable: true,
          speed: 2,
          startValue: "max",
          destroy: "min"
        }
      },
      size: {
        value: { min: 3, max: 7 }
      },
      life: {
        duration: {
          sync: true,
          value: 5
        },
        count: 1
      },
      move: {
        enable: true,
        gravity: {
          enable: true,
          acceleration: 20
        },
        speed: {
          min: 25,
          max: 50
        },
        drift: {
          min: -2,
          max: 2
        },
        decay: 0.05,
        direction: "none",
        outModes: {
          default: "destroy",
          top: "none"
        }
      },
      rotate: {
        value: {
          min: 0,
          max: 360
        },
        direction: "random",
        move: true,
        animation: {
          enable: true,
          speed: 60
        }
      },
      tilt: {
        direction: "random",
        enable: true,
        move: true,
        value: {
          min: 0,
          max: 360
        },
        animation: {
          enable: true,
          speed: 60
        }
      },
      roll: {
        darken: {
          enable: true,
          value: 25
        },
        enable: true,
        speed: {
          min: 15,
          max: 25
        }
      },
      wobble: {
        distance: 30,
        enable: true,
        move: true,
        speed: {
          min: -15,
          max: 15
        }
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        resize: true
      }
    },
    detectRetina: true,
    background: {
      color: "#ee9ca7"
    },
    responsive: [
      {
        maxWidth: 700,
        options: {
          particles: {
            move: {
              speed: 30,
              decay: 0.05
            }
          }
        }
      }
    ],
    emitters: [
      {
        direction: "top-right",
        rate: {
          delay: 0.1,
          quantity: 10
        },
        position: {
          x: 0,
          y: 50
        },
        size: {
          width: 0,
          height: 0
        }
      },
      {
        direction: "top-left",
        rate: {
          delay: 0.1,
          quantity: 10
        },
        position: {
          x: 100,
          y: 50
        },
        size: {
          width: 0,
          height: 0
        }
      }
    ]
  });
  

window.addEventListener("load", () => {
    const music = document.getElementById("background-music");

    // Phát nhạc nền khi tải lại trang
    if (music) {
        music.currentTime = 0; // Đặt lại thời gian phát về 0
        music.play().catch((error) => {
            console.error("Không thể phát nhạc:", error);
        });
    }

    // Hiển thị hiệu ứng của .message
    const messageContainer = document.querySelector(".message");
    if (messageContainer) {
        messageContainer.classList.add("clicked");
    }

    // Ẩn nút "Click Me"
    const clickMeButton = document.querySelector(".message__btn");
    if (clickMeButton) {
        clickMeButton.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const reloadButton = document.querySelector(".reload");

    // Hiển thị nút reload
    if (reloadButton) {
        reloadButton.style.display = "block";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const reloadButton = document.querySelector(".reload");
    const typingMessage = document.querySelector(".typing-message");
    const typingSound = document.getElementById("typing-sound");
    const gifContainer = document.getElementById("gif-container"); // Tham chiếu đến ảnh GIF

    // Sự kiện click cho nút reload
    reloadButton.addEventListener("click", () => {
        // Tắt nhạc nền
        const music = document.getElementById("background-music");
        if (music) {
            music.pause(); // Tạm dừng nhạc
            music.currentTime = 0; // Đặt lại thời gian phát về 0
        }

        // Thêm delay 2 giây trước khi phát tiếng và hiển thị chữ
        setTimeout(() => {
            // Hiển thị dòng tin nhắn giữa màn hình
            typingMessage.style.top = "50%";
            typingMessage.style.left = "50%";
            typingMessage.style.transform = "translate(-50%, -50%)";
            typingMessage.classList.add("show");

            // Xóa nội dung cũ
            typingMessage.innerHTML = "";

            // Phát tiếng gõ phím và hiển thị dòng chữ cùng lúc
            if (typingSound) {
                typingSound.currentTime = 0;
                typingSound.play().catch((error) => {
                    console.error("Không thể phát tiếng gõ phím:", error);
                });
            }

            // Bắt đầu hiển thị dòng tin nhắn
            typeLine(0, () => {
                // Dừng tiếng gõ phím khi hoàn tất
                if (typingSound) {
                    typingSound.pause();
                    typingSound.currentTime = 0;
                }
            });

            // Hiển thị ảnh GIF sau 2 giây
            setTimeout(() => {
                gifContainer.style.display = "block";
            }, 2000);
        }, 2000); // Delay 2 giây
    });

    // Hàm hiển thị từng dòng với hiệu ứng đánh máy
    function typeLine(index, onComplete) {
        const messages = [
            "Dear You",
            "Danang, 19/05/2025.",
            "",
            "",
            "Mayyy biết gì chưa?",
            "Sắp tới sẽ một ngày đặc biệt,",
            "Ngày sinh thần của một Bông Hoa xinh đẹp,",
            "Chúc Mayyy tuổi mới rực rỡ!",
            "Luôn lạc quan và giữ mãi nụ cười trên môi của mình  nhéee!🎉🎉🎉",
            "",
            "",
            "祝你生日像你一样甜",
            "愿你一切顺利!",
        ];

        if (index >= messages.length) {
            if (onComplete) onComplete(); // Gọi callback khi hoàn tất
            return;
        }

        const message = messages[index];
        let charIndex = 0;

        const typingInterval = setInterval(() => {
            if (charIndex < message.length) {
                typingMessage.innerHTML += message[charIndex];
                charIndex++;
            } else {
                clearInterval(typingInterval); // Dừng đánh máy dòng hiện tại
                typingMessage.innerHTML += "<br>"; // Thêm xuống dòng
                setTimeout(() => typeLine(index + 1, onComplete), 480); // Chuyển sang dòng tiếp theo
            }
        }, 63);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const reloadButton = document.querySelector(".reload");

    // Đảm bảo nút reload hiển thị sau 5 giây
    if (reloadButton) {
        reloadButton.style.display = "none"; // Ẩn nút reload ban đầu
        setTimeout(() => {
            reloadButton.style.display = "block"; // Hiển thị nút reload sau 5 giây
        }, 5000); // Delay 5 giây
    }
});



