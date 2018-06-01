 if request.method == "POST":
        if request.POST['building'] == 'farm':
            gold = random.randint(10, 21)
            request.session['activities'].append('You are earned ' + str(gold) + ' golds from the ' + request.POST['building'] + ' ' + '(' + str(datetime.now().strftime("%Y-%m-%d %H:%M")) + ')')

        elif request.POST['building'] == 'cave':
            gold = random.randint(5, 11)
            request.session['activities'].append('You are earned ' + str(gold) + ' golds from the ' + request.POST['building'] + ' ' + '(' + str(datetime.now().strftime("%Y-%m-%d %H:%M")) + ')')

        elif request.POST['building'] == 'house':
            gold = random.randint(2,6)
            request.session['activities'].append('You are earned ' + str(gold) + ' golds from the ' + request.POST['building'] + ' ' + '(' + str(datetime.now().strftime("%Y-%m-%d %H:%M")) + ')')

        elif request.POST['building'] == 'casino':
            gold = random.randint(-50, 51)
            if gold >= 0:
                request.session['activities'].append('Entered a casino and earned ' + str(gold) +' gold' + ' ' + '(' + str(datetime.now().strftime("%Y-%m-%d %H:%M")) + ')')
            else:
                request.session['activities'].append('Entered a casino and lost ' + str(gold) + ' gold... Ouch...' + ' ' + '(' + str(datetime.now().strftime("%Y-%m-%d %H:%M")) + ')')


    {% for activity in activites %}
      <!-- <p>{{activity.text}}</p> -->
      <p class="{% if activity.isPositive %} positive-activity {% else %} negative-activity {% endif %}">{{activity.text}}</p>
    {% endfor %}