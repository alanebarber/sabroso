"""
common.py

This module contains the model to persist and then
retrieve data from backends. It is intended to be
a common structure for a all parsed sources.
"""

__author__ = 'Alan Barber'

#python
from collections import namedtuple

Common = namedtuple(
    'Common',
    [
        "type",
        "data",
        "hash",
        "tags",
        "linked"
    ])
