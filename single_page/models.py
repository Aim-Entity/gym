from django.db import models


class Package(models.Model):
    name = models.CharField(max_length=200)
    sub_name = models.CharField(max_length=400, default="Subname")
    price = models.DecimalField(max_digits=1500, decimal_places=2)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Package's"


class Mentor(models.Model):
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to="mentor_img")
    role = models.CharField(max_length=200)
    facebook = models.URLField(max_length=1200, blank=True, null=True)
    twitter = models.URLField(max_length=1200, blank=True, null=True)
    instagram = models.URLField(max_length=1200, blank=True, null=True)

    def __str__(self):
        return self.name


class Contact(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=300)
    message = models.CharField(max_length=850)

    def __str__(self):
        return self.name


class Tick(models.Model):
    name = models.CharField(max_length=500)
    package = models.ForeignKey(Package, on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.name


class Cross(models.Model):
    name = models.CharField(max_length=500)
    package = models.ForeignKey(Package, on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Cross"
