
        // التحقق من صحة النموذج
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // التحقق من صحة البريد الإلكتروني
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('يرجى إدخال بريد إلكتروني صحيح');
                return;
            }
            
            // التحقق من طول كلمة المرور
            if (password.length < 6) {
                alert('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
                return;
            }
            
            // في حالة النجاح، يمكن إرسال البيانات للخادم
            alert('تم تسجيل الدخول بنجاح! سيتم توجيهك إلى الصفحة الرئيسية');
            // window.location.href = 'index.html';
        });
        
        // تأثيرات إضافية للحقول
        const inputs = document.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.querySelector('i').style.color = '#4a69bd';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.querySelector('i').style.color = '#7f8c8d';
            });
        });
