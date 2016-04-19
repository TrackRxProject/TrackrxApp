curl -X POST -H "Authorization: key=AIzaSyArADgdOmRwMRFzsSj9p4G7c0U0cdW8reM" -H "Content-Type: application/json" -d '
        {
                "data": {
                "info": {
                "subject": "Medication Reminder",
                "message": "Time to take your medication",
        }
        },
        "to" : "cIXiqCIanRg:APA91bEazp38G7yzsf8xXcrzdVgUCvr7PauD96jvv9VpDNl1aY2ePa-8E8by7tq6lo956YED2foLCNbHHuqcT8sqyU5ZyYeUcbDMKQcyfeTgvnekgzAZqcIh974dW30l3tWkLmm2sqp7"
}' 'https://gcm-http.googleapis.com/gcm/send'
