from django.core.mail import EmailMessage

from core.models import Cart


def send_email(email_address):
    cart = Cart.objects.first()

    if len(cart.data) > 0:
        totals = [str(diamond["quantity"]) + "x " + diamond["type"] for diamond in cart.data]
        amount = sum([diamond["quantity"] for diamond in cart.data])
        body = "You have " + ", ".join(totals) + " in your cart.\nTotal amount of diamonds: " + str(amount) + "."
    else:
        body = 'Your shopping cart is empty.'

    email = EmailMessage('Diamonds in your cart', body, to=[email_address])
    email.send()

