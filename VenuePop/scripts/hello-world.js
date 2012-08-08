 var messages = [];

        $(function () {
            $("#message").hide();

            function PollData() {
                $.ajax({
                    url: "http://localhost:4477/api/message",
                    type: "get",
                    success: function (data) {
                        $.each(data, function (index, value) {
                            var messageId = value.MessageId;

                            if (jQuery.inArray(messageId, messages) == -1) {
                                $("#message").show().html(value.Text);
                                messages.push(value.MessageId);
                                setTimeout(function () {
                                    $("#message").hide();
                                }, 2000);
                            }
                        })
                    }
                });
            }

            setInterval(function () { PollData(); }, 500);
        });