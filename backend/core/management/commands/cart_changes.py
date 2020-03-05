import logging

from django.core.management import BaseCommand

from conf.settings import ADMIN_ACCOUNT
from core.models import Cart
from core.utils import send_email

log = logging.getLogger(__name__)


class Command(BaseCommand):
    help = 'Sends email to admin with information about cart content'

    def handle(self, *args, **options):
        log.debug("Sending email")

        cart = Cart.objects.first()
        if cart.updated:
            send_email(ADMIN_ACCOUNT["email"])

