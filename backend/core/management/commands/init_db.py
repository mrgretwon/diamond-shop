import logging

from django.contrib.auth.models import User, Group
from django.core.management import BaseCommand, call_command

from conf.settings import ADMIN_ACCOUNT

log = logging.getLogger(__name__)


class Command(BaseCommand):
    help = 'Loads initial dictionary data'

    def handle(self, *args, **options):
        log.debug("Loading dictionary data")
        call_command('migrate')
        call_command('loaddata', 'initial')

        user = User.objects.create_user(id=1, username=ADMIN_ACCOUNT['username'], email=ADMIN_ACCOUNT['email'],
                                        password=ADMIN_ACCOUNT['password'], is_superuser=True, is_staff=True)

        group = Group.objects.create(name='Admin')

        user.groups.add(group)
        user.save()
