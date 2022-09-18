
                let acc = document.getElementsByClassName("deroule");
                let show_table = document.getElementsByClassName("btn-show")

                function toggleEl() {
                    let show_table = document.getElementById("show-table")
                    if (show_table.style.display === "none") {
                        show_table.style.display ="block"
                    }else{
                        show_table.style.display = "none"
                    }
                }
                let i;

                for (i = 0; i < acc.length; i++) {
                    acc[i].addEventListener("click", function () {
                        this.classList.toggle("active");
                        let panel = this.nextElementSibling;
                        if (panel.style.display === "block") {
                            panel.style.display = "none";
                        } else {
                            panel.style.display = "block";
                        }
                    });
                }