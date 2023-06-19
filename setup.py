from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in hitu/__init__.py
from hitu import __version__ as version

setup(
	name="hitu",
	version=version,
	description="new app",
	author="Hitanshu",
	author_email="namemine150@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
